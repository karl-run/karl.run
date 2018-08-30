import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './structure/Header'
import Footer from './structure/Footer';

const RootContainer = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding: 1.5rem;
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
        <Footer />
      </div>
    )}
  </StaticQuery>
)

export default Layout
