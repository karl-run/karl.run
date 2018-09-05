import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './structure/header'
import Footer from './structure/Footer'

import './../style/baseStyles'

const RootContainer = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            version
          }
        }
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `}
  >
    {({ site, allMarkdownRemark }) => (
      <div>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Tech blog by Karl. Made with Gatsby.',
            },
            {
              name: 'keywords',
              content: `blog, ${allMarkdownRemark.group
                .map(v => v.fieldValue)
                .join(', ')}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={site.siteMetadata.title}
          version={site.siteMetadata.version}
        />
        <RootContainer>{children}</RootContainer>
        <Footer />
      </div>
    )}
  </StaticQuery>
)

export default Layout
