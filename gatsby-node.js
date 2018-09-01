const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'pages/posts' })
    const datePrefix = node.frontmatter.date.substring(0, 10).replace(/-/g, '/')

    createNodeField({
      node,
      name: `slug`,
      value: `/${datePrefix}${slug}`,
    })
  }
}

const createBlogPages = async (graphql, createPage) => {
  const result = await graphql(`
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
  `)

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.js`),
      context: {
        slug: node.fields.slug,
        next,
        previous,
      },
    })
  })
}

const createTagPages = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const tags = result.data.allMarkdownRemark.group
  tags.forEach(tag => {
    createPage({
      path: `/tag/${tag.fieldValue}`,
      component: path.resolve(`./src/templates/Tag.js`),
      context: {
        tag: tag.fieldValue,
        count: tag.totalCount,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await createBlogPages(graphql, createPage)
  await createTagPages(graphql, createPage)
}
