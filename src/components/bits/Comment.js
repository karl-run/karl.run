import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { CommentCount, DiscussionEmbed } from 'disqus-react'

const Short = ({ disqusShortname, disqusConfig, slug }) => (
  <div>
    <a href={slug + '#comments'}>
      <CommentCount shortname={disqusShortname} config={disqusConfig}>
        Go to comments
      </CommentCount>
    </a>
  </div>
)

const CommentBox = styled.div`
  min-height: 400px;
`

const Full = ({ disqusShortname, disqusConfig }) => (
  <CommentBox>
    <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
  </CommentBox>
)

const CommentContent = ({ short, site, title, slug, id }) => {
  const disqusConfig = {
    url: site.siteMetadata.url + slug,
    identifier: id,
    title: title,
  }

  return (
    <div id="comments">
      {short ? (
        <Short
          disqusShortname={site.siteMetadata.disqus.shortName}
          disqusConfig={disqusConfig}
          slug={slug}
        />
      ) : (
        <Full
          disqusShortname={site.siteMetadata.disqus.shortName}
          disqusConfig={disqusConfig}
        />
      )}
    </div>
  )
}

const Comment = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              url
              disqus {
                shortName
              }
            }
          }
        }
      `}
      render={data => <CommentContent site={data.site} {...props} />}
    />
  )
}

export default Comment
