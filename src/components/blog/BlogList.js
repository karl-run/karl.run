import React from 'react'
import BlogEntry from './BlogEntry'

export default ({ entries }) => {
  return (
    <div>
      {entries.map(({ node }, i) => (
        <BlogEntry key={node.id} entry={node} />
      ))}
    </div>
  )
}
