import React from 'react'
import { Spring } from 'react-spring'

import { Content } from './layoutStyles'

import Header from './header/Header'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isRoot = location.pathname === rootPath

    return (
      <div>
        <Spring
          from={{ height: isRoot ? 200 : 500 }}
          to={{ height: isRoot ? 500 : 200 }}
          render={Header}
        />
        <Spring
          from={{ paddingTop: isRoot ? 200 : 500 }}
          to={{ paddingTop: isRoot ? 500 : 200 }}
        >
          {styles => <Content>{children}</Content>}
        </Spring>
      </div>
    )
  }
}

export default Template
