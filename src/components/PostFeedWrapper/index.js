import React from 'react'
import styled from 'styled-components'

function PostFeedWrapper({ children }) {
  return <PostFeedWrapperRoot>{children}</PostFeedWrapperRoot>
}

const PostFeedWrapperRoot = styled.div`
  padding: 0 ${props => props.theme.paddings.xxxxxl};

  ${props => props.theme.deviceSizes.desktop} {
    padding: 0 ${props => props.theme.paddings.global};
  }
`

export default PostFeedWrapper
