import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogHeader from '../components/blog/BlogHeader'
import { Card } from '../style/elements'
import Comment from '../components/bits/Comment'

export default ({ data: { markdownRemark, site } }) => {
  const frontmatter = markdownRemark.frontmatter
  const fields = markdownRemark.fields

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: site.title }]} // Todo description
        title={`${frontmatter.title} | ${site.siteMetadata.title}`}
      />
      <Card>
        <BlogHeader
          title={frontmatter.title}
          slug={fields.slug}
          date={frontmatter.date}
          tags={frontmatter.tags}
          timeToRead={markdownRemark.timeToRead}
          sharpImg={frontmatter.banner}
        />
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <Comment
          id={fields.idName}
          slug={fields.slug}
          title={frontmatter.title}
          short
        />
      </Card>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
        idName
      }
      timeToRead
    }
  }
`
