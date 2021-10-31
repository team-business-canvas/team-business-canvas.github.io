import React from 'react'
import styled from 'styled-components'

function Divider() {
  return (
    <DividerRoot>
      <hr />
    </DividerRoot>
  )
}

const DividerRoot = styled.div`
  width: 100%;

  margin: 24px 0 48px 0;

  hr {
    width: 60px;
    border: none;
    border-top: 2px solid var(--adaptiveGray900);
  }
`

export default Divider
