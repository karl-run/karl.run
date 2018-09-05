import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogHeader from '../components/blog/BlogHeader'
import { Card } from '../style/elements'
import Comment from '../components/bits/Comment'

const SeoMeta = (frontmatter, excerpt, host, slug) => {
  let image = null
  if (frontmatter.banner) {
    image = frontmatter.banner.childImageSharp.fixed.src
  }
  return [
    <meta property="og:title" content={frontmatter.title} />,
    <meta property="og:description" content={excerpt} />,
    <meta property="og:type" content="website" />,
    <meta property="og:url" content={host + slug} />,
    <meta property="og:image" content={image ? host + image : null} />,
    <meta property="og:image:alt" content="blog post header image" />,
  ]
}

export default ({ data: { markdownRemark, site } }) => {
  const frontmatter = markdownRemark.frontmatter
  const fields = markdownRemark.fields

  return (
    <Layout
      additionalHelmetProps={{
        htmlAttributes: { lang: 'en' },
        meta: [{ name: 'description', content: site.title }],
        title: `${frontmatter.title} | ${site.siteMetadata.title}`,
      }}
      helmetChildren={SeoMeta(
        frontmatter,
        markdownRemark.excerpt,
        site.siteMetadata.url,
        fields.slug,
      )}
    >
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
        url
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
            fixed {
              src
            }
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
