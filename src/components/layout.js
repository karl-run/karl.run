import React from 'react'
import { Spring } from 'react-spring'

import Header from './header/Header'
import Content from './content/Content'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isRoot = location.pathname === rootPath

    return (
      <div>
        <Spring
          from={{ height: isRoot ? 150 : 200 }}
          to={{ height: isRoot ? 200 : 150 }}
        >
          {({ height }) => (
            <>
              <Header height={height} isRoot={isRoot} />
              <Content top={height}>{children}</Content>
            </>
          )}
        </Spring>
      </div>
    )
  }
}

export default Template
