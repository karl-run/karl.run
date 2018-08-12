import React from 'react'
import styled from 'styled-components'

const Root = styled.section`
    margin: 0 auto;
    max-width: 768px;
    padding-top: ${props => props.top + 116}px;
`

const Content = ({ top, children }) => {
  return <Root top={top}>{children}</Root>
}

export default Content;