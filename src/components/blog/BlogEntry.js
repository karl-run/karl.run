import React from 'react'
import styled from 'styled-components'

const BlogHeader = styled.h2`
  margin: 1rem;
`

const Excerpt = styled.div`
  margin: 1rem;
`

const Timestamp = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-left: 2rem;
`

export default ({ entry }) => {
  return (
    <div>
      <BlogHeader>{entry.frontmatter.title}</BlogHeader>
      <Timestamp>{entry.frontmatter.date}</Timestamp>
      <Excerpt>{entry.excerpt}</Excerpt>
    </div>
  )
}
