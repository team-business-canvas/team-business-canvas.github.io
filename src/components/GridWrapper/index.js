import React from 'react'
import styled from 'styled-components'

function GridWrapper({ children }) {
  return <GridWrapperRoot>{children}</GridWrapperRoot>
}

const GridWrapperRoot = styled.div`
  padding: 0 2rem;
  ${props => props.theme.deviceSizes.desktop} {
    padding: 0 8.5rem;
  }
`

export default GridWrapper
