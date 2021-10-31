import React from 'react'
import styled from 'styled-components'

function FeaturedImageWrapper() {
  return <FeaturedImageWrapperRoot></FeaturedImageWrapperRoot>
}

const FeaturedImageWrapperRoot = styled.div`
  ${props => props.deviceSizes.desktop} {
  }
`

export default FeaturedImageWrapper
