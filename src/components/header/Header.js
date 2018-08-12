import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Spring, config } from 'react-spring'

import logo from './karl.png'

export const Root = styled.header`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #36a398;
  display: flex;
  justify-content: center;

  .header-logo {
    position: absolute;
    bottom: -100px;
    background-color: white;
    border-radius: 50%;
  }
`

const Header = ({ height, isRoot }) => {
  return (
    <Root style={{ height }}>
      <Spring
        from={{ right: isRoot ? 60 : 0 }}
        to={{ right: 0 }}
        config={config.wobbly}
      >
        {styles => (
          <Link
            style={{ transform: `translateX(${styles.right}vw)` }}
            className="header-logo"
            to={'/'}
          >
            <img src={logo} width="200px" />
          </Link>
        )}
      </Spring>
    </Root>
  )
}

export default Header
