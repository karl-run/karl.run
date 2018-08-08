import React from 'react'
import { Link } from 'gatsby'
import { Spring } from 'react-spring'

import { rhythm, scale } from '../utils/typography'

import { Header, Content } from './layoutStyles'
import logo from './karl.png'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isRoot = location.pathname === rootPath

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
        }}
      >
        <Spring
          from={{ height: isRoot ? 200 : 500 }}
          to={{ height: isRoot ? 500 : 200 }}
        >
          {styles => (
            <Header style={styles}>
              <h1
                style={{
                  ...scale(1.5),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: 'none',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  to={'/'}
                >
                  <img src={logo} width="200px" />
                  Gatsby Starter Blog
                </Link>
              </h1>
            </Header>
          )}
        </Spring>
        <Spring
          from={{ paddingTop: isRoot ? 200 : 500 }}
          to={{ paddingTop: isRoot ? 500 : 200 }}
        >
          {styles => (
            <Content
              style={{
                ...styles,
                padding: `0 ${rhythm(3 / 4)}`,
              }}
            >
              {children}
            </Content>
          )}
        </Spring>
      </div>
    )
  }
}

export default Template
