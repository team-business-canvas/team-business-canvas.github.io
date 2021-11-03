import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

function PageItem(props) {
  const { page, isIndexPage } = props

  // window.location 안 먹는데
  const isCurrentPage = (function () {
    if (typeof window !== `undefined`) {
      return Number(window.location.pathname.split('/').at(-1)) === page
    }
  })()

  // () => {
  //   if (typeof window !== `undefined`) {
  //     return Number(window.location.pathname.split('/').at(-1)) === page
  //   }
  // }();

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

  width: 30px;
  height: 30px;

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

  ${props => props.theme.deviceSizes.desktop} {
    width: 50px;
    height: 50px;
  }
`

export default PageItem
