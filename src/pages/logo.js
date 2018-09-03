import React from 'react'
import styled from 'styled-components'
import Logo from 'karl.svg'

const SecretWrapper = styled.div`
  overflow: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    height: 100%;
  }
`

const SecretLogoPage = () => (
  <SecretWrapper>
    <Logo.Animated />
  </SecretWrapper>
)

export default SecretLogoPage
