import { Link, navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import chevronLeft from '../../images/chevron-left.svg'
import chevronRight from '../../images/chevron-right.svg'

function NextPrevItem({ direction, isFirstPage, isLastPage, currentPage }) {
  const handleNextPrevButtonClick = () => {
    if (direction === 'next' && !isLastPage) {
      return navigate(`/blog/${currentPage + 1}`)
    }

    if (direction === 'prev' && !isFirstPage) {
      return navigate(`/blog/${currentPage - 1}`)
    }
  }

  return (
    <Link>
      <NextPrevItemButton onClick={handleNextPrevButtonClick}>
        {direction === 'prev' && (
          <div>
            <img src={chevronLeft} alt='prev' />
          </div>
        )}
        {direction === 'next' && (
          <div>
            <img src={chevronRight} alt='next' />
          </div>
        )}
      </NextPrevItemButton>
    </Link>
  )
}

const NextPrevItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 6px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`

export default NextPrevItem
