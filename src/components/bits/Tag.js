import React from 'react'
import styled from 'styled-components'

const TagStyle = styled.span`
  display: inline-block;
  margin: 4px;
  font-size: 0.9rem;

  a {
    color: currentColor;
  }
`

const Tag = ({ name, style }) => (
  <TagStyle style={style}>
    <a href={`/tag/${name}`}>#{name}</a>
  </TagStyle>
)

export default Tag
