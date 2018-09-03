import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import KarlLogo from 'karl.svg'
import SocialBox from './SocialBox'

const Outer = styled.div`
  background: #36a398;
  margin-bottom: 1.45rem;
  margin: 0 auto;
`

const Content = styled.div`
  margin: 0 auto;
  position: relative;
  min-height: 300px;
  max-width: 960px;

  display: flex;
  justify-content: space-between;
  justify-content: center;
`

const Menu = styled.nav`
  position: absolute;
  top: 16px;
  left: 8px;
  z-index: 1;

  a {
    color: white;
    padding: 16px;
  }
`
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;

  > div {
    height: 320px;
    width: 320px;
  }
`
const Social = styled.div`
  position: absolute;
  right: 8px;
`

const Header = ({ siteTitle, version }) => (
  <Outer>
    <Content>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Menu>
      <Middle>
        <div>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <KarlLogo.Animated />
          </Link>
        </div>
      </Middle>
      <Social>
        <SocialBox />
      </Social>
    </Content>
  </Outer>
)

export default Header
