import React from 'react'
import styled from 'styled-components'

const Root = styled.section`
    padding-top: ${props => props.top}px;
`

const Content = ({ top, children }) => {
  return <Root top={top}>{children}</Root>
}

export default Content;