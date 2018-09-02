import React from 'react'
import styled from 'styled-components'

import Tags from './Tags'

const FooterBox = styled.div`
  background-color: #262a30;
  color: #999;
  width: 100%;
  min-height: 300px;
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

const Footer = () => (
  <FooterBox>
    <Content>
      <Tags />
    </Content>
  </FooterBox>
)

export default Footer
