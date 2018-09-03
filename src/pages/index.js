import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogList from '../components/blog/BlogList'

import 'prismjs/themes/prism.css'

export default ({ data }) => (
  <Layout>
    <BlogList entries={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
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
            idName
          }
          timeToRead
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`
