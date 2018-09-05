import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import emailsIcon from './icons/email.svg'
import githubIcon from './icons/github.svg'
import linkedinIcon from './icons/linkedin.svg'
import twitterIcon from './icons/twitter.svg'

const SocialBoxOuter = styled.nav`
  img {
    margin: 8px;
  }
`

const SocialBox = () => (
  <SocialBoxOuter id="sub-nav">
    <OutboundLink
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/karl-run"
      id="nav-github-link"
      title="Github"
    >
      <img src={githubIcon} alt="github icon link" />
    </OutboundLink>
    <OutboundLink
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.linkedin.com/in/karloveraa/"
      id="nav-linkedin-link"
      title="LinkedIn"
    >
      <img src={linkedinIcon} alt="linkedin icon link" />
    </OutboundLink>
    <OutboundLink
      rel="noopener noreferrer"
      target="_blank"
      href="https://twitter.com/karl_run"
      id="nav-twitter-link"
      title="Twitter"
    >
      <img src={twitterIcon} alt="twitter icon link" />
    </OutboundLink>
    <OutboundLink
      rel="noopener noreferrer"
      target="_blank"
      href="mailto:k@rl.run"
      id="nav-email-link"
      title="E-mail"
    >
      <img src={emailsIcon} alt="emails icon link" />
    </OutboundLink>
  </SocialBoxOuter>
)

export default SocialBox
