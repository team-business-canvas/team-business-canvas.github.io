import React from 'react'
import styled from 'styled-components'
import useScrollFadeIn from '../../hooks/useScrollFadeIn'

function AllPostTitle({ title }) {
  return (
    <AllPostTitleRoot {...useScrollFadeIn('up', 0.75, 0)}>
      {title}
    </AllPostTitleRoot>
  )
}

const AllPostTitleRoot = styled.h1`
  width: 100%;
  margin-top: 48px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: var(--adaptiveGray900);

  ${props => props.theme.deviceSizes.desktop} {
    font-size: 2em;
  }
`

export default AllPostTitle
