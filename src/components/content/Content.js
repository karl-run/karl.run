import React from 'react'
import styled from 'styled-components'

const Root = styled.section`
  margin: 0 auto;
  max-width: 768px;
`

const Content = ({ top, children }) => {
  return <Root style={{ paddingTop: `${top + 116}px` }}>{children}</Root>
}

export default Content
