const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'pages/posts' })
    const datePrefix = node.frontmatter.date.substring(0, 10).replace(/-/g, '/')
    console.log('ya', `${datePrefix}/${slug}`)

    createNodeField({
      node,
      name: `slug`,
      value: `/${datePrefix}${slug}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
      posts.forEach(({ node }, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/BlogPost.js`),
          context: {
            slug: node.fields.slug,
            next,
            previous
          },
        })
      })
      resolve()
    })
  })
}
