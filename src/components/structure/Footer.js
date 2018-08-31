import React from 'react'
import styled from 'styled-components'

import Tags from './Tags';

const FooterBox = styled.div`
  background-color: #262a30;
  color: #999;
  width: 100%;
  min-height: 300px;
`

const Footer = () => (
  <FooterBox>
    <Tags />
  </FooterBox>
)

export default Footer
