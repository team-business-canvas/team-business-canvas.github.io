import React from 'react'
import styled from 'styled-components'

function PostFeed({ frontmatter }) {
  return (
    <PostFeedRoot>
      <Title>{frontmatter.title}</Title>
    </PostFeedRoot>
  )
}

const PostFeedRoot = styled.div`
  border: 1px solid var(--adaptiveGray200);
  padding: 20px;
  cursor: pointer;
  margin-bottom: 24px;
`

const Title = styled.h1``

export default PostFeed
