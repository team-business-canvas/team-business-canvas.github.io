import React from 'react'
import styled from 'styled-components'
import PageItem from './PageItem'

function Pagination({ numPages }) {
  return (
    <PaginationRoot>
      {Array.from({ length: numPages }, (_, i) => {
        return <PageItem key={i} page={i + 1} />
      })}
    </PaginationRoot>
  )
}

const PaginationRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 24px 0;

  background-color: var(--adaptiveGray50);
`

export default Pagination
