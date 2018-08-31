import React from 'react'
import styled from 'styled-components'

const TagStyle = styled.span`
  display: inline-block;
  margin: 4px;
`

const Tag = ({ name }) => (
  <TagStyle>
    <a href={`/tag/{${name}}`}>{name}</a>
  </TagStyle>
)

export default Tag
