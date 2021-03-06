import React from 'react'
import styled from 'styled-components'

import Tag from '../bits/Tag'
import Img from '../bits/Img'

const Timestamp = styled.div`
  font-size: 0.8rem;
  color: #666;
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .tag-box {
    color: #333;
  }
`

const BlogHeader = ({ title, slug, date, tags, timeToRead, sharpImg }) => (
  <div>
    <h1>
      <a href={slug}>{title}</a>
    </h1>
    <SubHeader>
      <Timestamp>
        {date}, {timeToRead} minute read
      </Timestamp>
      <div className="tag-box">
        {tags.map(tag => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
    </SubHeader>
    <Img sharpImg={sharpImg} />
  </div>
)

export default BlogHeader
