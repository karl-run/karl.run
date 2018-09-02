import React from 'react'
import styled from 'styled-components'

import { Card } from '../../style/elements'

import BlogHeader from './BlogHeader'
import Comment from '../bits/Comment'

const Excerpt = styled.div``

const BottomComment = styled.div`
  display: flex;
  justify-content: flex-end;
`

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
        <BottomComment>
          <Comment
            id={entry.fields.idName}
            slug={entry.fields.slug}
            title={frontmatter.title}
            short
          />
        </BottomComment>
      </Card>
    </div>
  )
}
