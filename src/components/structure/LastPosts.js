import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

const LastPostsWrapper = styled.div`
  ul {
    color: #36a398;
    margin-left: 28px;
    list-style-type: circle;
  }

  h6 {
    color: #eee;
  }
`

const SinglePostLine = styled.li`
  margin-bottom: 8px;

  a {
    color: #36a398;
  }
`

const LastPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 3
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
  >
    {({ allMarkdownRemark: { edges } }) => {
      const posts = edges.map(edge => edge.node)
      return (
        <LastPostsWrapper>
          <h6>Last three posts</h6>
          <ul>
            {posts.map(post => (
              <SinglePostLine>
                <a href={post.fields.slug}>{post.frontmatter.title}</a>
              </SinglePostLine>
            ))}
          </ul>
        </LastPostsWrapper>
      )
    }}
  </StaticQuery>
)

export default LastPosts
