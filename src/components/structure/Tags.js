import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Tag from '../bits/Tag'

const TagsGroup = styled.div`
  color: #36a398;

  h6 {
    color: #eee;
  }
`

const Tags = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
  >
    {({ allMarkdownRemark: { group } }) => {
      const sorted = group.sort((a, b) => a.totalCount <= b.totalCount)

      return (
        <TagsGroup>
          <h6>Tags</h6>
          {sorted.map(tag => (
            <Tag
              key={tag.fieldValue}
              name={tag.fieldValue}
              style={{ fontSize: `1.${tag.totalCount}rem` }} // TODO this logic...
            />
          ))}
        </TagsGroup>
      )
    }}
  </StaticQuery>
)

export default Tags
