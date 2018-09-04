import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Logo from 'karl.svg'

import Layout from '../components/layout'
import { Card } from '../style/elements'

const AboutWrapper = styled.div`
  > h2:first-of-type {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
      display: inline-block;
      height: 42px;
      width: 42px;
    }
  }

  code {
    font-family: monospace;
    padding: 1px 3px;
    background-color: #eee;
  }
`

const About = () => (
  <Layout>
    <Card>
      <AboutWrapper>
        <h2>
          <Logo.Head />
          About Karl
        </h2>
        <code>sudo ./karl --run --verbose</code>
        <h4>Who &amp; Why</h4>
        <p>
          Hi. I’m Karl. I quickly threw together this blog using{' '}
          <OutboundLink href="https://gatsbyjs.org">gatsby</OutboundLink> as a
          learning exercise as well as having a place to collect my thoughts
          around certain topics that I find interesting, or problems I solve
          that I want to share.
        </p>
        <p>
          I am currently working as a frontend developer in Oslo, Norway. I'm a
          fullstack developer but I enjoy working with modern web technologies
          the most.
        </p>

        <h4>Get in touch</h4>
        <ul>
          <li>
            <OutboundLink href="https://github.com/karl-run">
              Github
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://www.linkedin.com/in/karloveraa/">
              LinkedIn
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://twitter.com/karl_run">
              Twitter
            </OutboundLink>
          </li>
        </ul>
        <p>
          Or simply <OutboundLink href="mailto:k@rl.run">email me</OutboundLink>
        </p>
      </AboutWrapper>
    </Card>
  </Layout>
)

export default About
