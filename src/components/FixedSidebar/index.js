import React from 'react'
import styled from 'styled-components'

function FixedSideBar() {
  return (
    <FixedSideBarRoot>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </FixedSideBarRoot>
  )
}

const FixedSideBarRoot = styled.div`
  display: none;

  ${props => props.theme.deviceSizes.desktop} {
    display: block;

    position: fixed;
    top: 120px;
    right: 20px;

    z-index: 1;

    width: 130px;

    border-radius: 6px;
    border: 1px solid var(--adaptiveGray200);
    padding: 8px;

    background: var(--adaptiveGray50);
  }
`

export default FixedSideBar
