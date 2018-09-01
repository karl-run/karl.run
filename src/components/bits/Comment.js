import React from 'react'
import { CommentCount, DiscussionEmbed } from 'disqus-react'

const Short = ({ disqusShortname, disqusConfig }) => (
  <div>
    <CommentCount shortname={disqusShortname} config={disqusConfig}>
      Comments
    </CommentCount>
  </div>
)

const Full = ({ disqusShortname, disqusConfig }) => (
  <div>
    <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
  </div>
)

const Comment = props => {
  const disqusShortname = 'karl-run'
  const disqusConfig = {
    url: 'https://karl.now.sh' + props.slug,
    identifier: props.id,
    title: props.title,
  }

  return props.short ? (
    <Short disqusShortname={disqusShortname} disqusConfig={disqusConfig} />
  ) : (
    <Full disqusShortname={disqusShortname} disqusConfig={disqusConfig} />
  )
}

export default Comment
