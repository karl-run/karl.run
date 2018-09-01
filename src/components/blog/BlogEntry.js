import React from 'react'
import styled from 'styled-components'

import { Card } from '../../style/elements'

import BlogHeader from './BlogHeader'
import Comment from '../bits/Comment'

const Excerpt = styled.div``

export default ({ entry }) => {
  const frontmatter = entry.frontmatter

  return (
    <div>
      <Card>
        <BlogHeader
          title={frontmatter.title}
          slug={entry.fields.slug}
          date={frontmatter.date}
          tags={frontmatter.tags}
          sharpImg={frontmatter.banner}
          timeToRead={entry.timeToRead}
        />
        <Excerpt>{entry.excerpt}</Excerpt>
        <Comment slug={entry.fields.slug} title={frontmatter.title} />
      </Card>
    </div>
  )
}
