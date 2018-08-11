import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from './karl.png'

export const Root = styled.header`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #36a398;
  height: ${props => props.height}px;
  display: flex;
  justify-content: center;
`

const Header = ({ height }) => {
  return (
    <Root height={height}>
      <Link to={'/'}>
        <img src={logo} width="200px" />
      </Link>
    </Root>
  )
}

export default Header
