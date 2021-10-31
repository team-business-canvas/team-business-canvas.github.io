import React from 'react'
import styled from 'styled-components'

function PostFeedWrapper({ children }) {
  return <PostFeedWrapperRoot>{children}</PostFeedWrapperRoot>
}

const PostFeedWrapperRoot = styled.div`
  padding: 0 2rem;
  ${props => props.theme.deviceSizes.desktop} {
    padding: 0 8.5rem;
  }
`

export default PostFeedWrapper
