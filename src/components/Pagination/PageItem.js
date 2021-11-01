import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

function PageItem({ page, isIndexPage }) {
  const isCurrentPage =
    Number(window.location.pathname.split('/').at(-1)) === page

  const shouldFirstPageItemBeDisabled = isIndexPage && page === 1

  return (
    <Link to={`/blog/${page}`}>
      <PageButton
        isCurrentPage={isCurrentPage || shouldFirstPageItemBeDisabled}
      >
        {page}
      </PageButton>
    </Link>
  )
}

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 6px;

  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? 'var(--adaptiveGray900)' : 'var(--adaptiveGray50)'};

  color: ${({ isCurrentPage }) =>
    isCurrentPage ? 'var(--adaptiveGray50)' : 'var(--adaptiveGray900)'};

  cursor: pointer;

  &:hover {
    background-color: ${({ isCurrentPage }) =>
      !isCurrentPage && 'var(--adaptiveGray100)'};
  }
`

export default PageItem
