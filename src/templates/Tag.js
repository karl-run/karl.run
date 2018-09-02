import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogEntry from '../components/blog/BlogEntry'
import { CardSibling } from '../style/elements'

export default props => {
  const {
    pageContext,
    data: {
      allMarkdownRemark: { edges },
    },
  } = props
  const posts = edges.map(edge => edge.node)

  return (
    <Layout>
      <CardSibling>
        <h1>All posts tagged with "{pageContext.tag}"</h1>
        <div>{pageContext.count} posts found.</div>
      </CardSibling>
      {posts.map(post => (
        <BlogEntry entry={post} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            banner {
              publicURL
              childImageSharp {
                fluid {
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
