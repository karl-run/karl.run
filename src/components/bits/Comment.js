import React from 'react'
import Disqus from 'disqus-react'

const Comment = (props) => {
  const disqusShortname = 'karl-run'
  const disqusConfig = {
    url: props.slug,
    identifier: props.slug,
    title: props.title,
  }

  return (
    <div className="article">
      <h1>{props.title}</h1>
      <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
        Comments
      </Disqus.CommentCount>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default Comment
