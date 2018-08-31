import React from 'react'
import styled from 'styled-components'

import { Card } from '../../style/elements'

import BlogHeader from './BlogHeader'

const Excerpt = styled.div``

export default ({ entry }) => {
  const frontmatter = entry.frontmatter

  console.log(frontmatter);
  

  return (
    <div>
      <Card>
        <BlogHeader
          title={entry.frontmatter.title}
          slug={entry.fields.slug}
          date={frontmatter.date}
          tags={frontmatter.tags}
          sharpImg={frontmatter.banner}
          timeToRead={entry.timeToRead}
        />
        <Excerpt>{entry.excerpt}</Excerpt>
      </Card>
    </div>
  )
}
