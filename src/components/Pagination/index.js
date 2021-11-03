import React from 'react'
import styled from 'styled-components'
import PageItem from './PageItem'
import NextPrevItem from './NextPrevItem'

function Pagination({
  isFirstPage,
  isLastPage,
  numPages,
  currentPage,
  isIndexPage,
  location,
}) {
  return (
    <PaginationRoot>
      <NextPrevItem
        direction='prev'
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        currentPage={currentPage}
      />
      {Array.from({ length: numPages }, (_, i) => {
        return (
          <PageItem
            key={i}
            page={i + 1}
            isIndexPage={isIndexPage}
            location={location}
          />
        )
      })}
      <NextPrevItem
        direction='next'
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        currentPage={currentPage}
      />
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

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`

export default Pagination
