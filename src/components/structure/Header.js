import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Outer = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;

  display: flex;
  justify-content: space-between;
`

const Header = ({ siteTitle, version }) => (
  <Outer>
    <div style={{}}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>{version}</div>
  </Outer>
)

export default Header
