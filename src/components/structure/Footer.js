import React from 'react'
import styled from 'styled-components'

import Tags from './Tags'
import MadeBy from './MadeBy'
import LastPosts from './LastPosts'

const FooterBox = styled.div`
  background-color: #262a30;
  color: #999;
  width: 100%;
  min-height: 300px;
  padding-top: 20px;
  padding: 16px;
  box-sizing: border-box;
`

const Content = styled.div`
  margin: 0 auto;
  position: relative;
  min-height: 300px;
  max-width: 768px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  > div:nth-child(1) {
    flex: 0 0 40%;
  }

  > div:nth-child(2) {
    flex: 0 0 60%;
  }

  > div:nth-child(3) {
    flex: 0 0 100%;
  }
`

const Footer = () => (
  <FooterBox>
    <Content>
      <Tags />
      <LastPosts />
      <MadeBy />
    </Content>
  </FooterBox>
)

export default Footer
