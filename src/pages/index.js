import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogList from '../components/blog/BlogList';

import '../style/baseStyles'

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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
