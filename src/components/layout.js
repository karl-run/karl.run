import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './structure/Header'

const RootContainer = styled.div`
  margin: '0 auto';
  max-width: 960;
  padding: '0px 1.0875rem 1.45rem';
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
      }
    `}
  >
    {({ site }) => (
      <div>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header
          siteTitle={site.siteMetadata.title}
          version={site.siteMetadata.version}
        />
        <RootContainer>{children}</RootContainer>
      </div>
    )}
  </StaticQuery>
)

export default Layout
