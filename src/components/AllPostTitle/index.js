import React from 'react'
import styled from 'styled-components'

function AllPostTitle({ title }) {
  return <AllPostTitleRoot>{title}</AllPostTitleRoot>
}

const AllPostTitleRoot = styled.h1`
  width: 100%;
  margin-top: 48px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: var(--adaptiveGray900);
`

export default AllPostTitle
