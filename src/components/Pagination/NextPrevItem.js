import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import chevronLeftBlack from '../../images/chevron-left-black.svg'
import chevronLeftWhite from '../../images/chevron-left-white.svg'
import chevronRightBlack from '../../images/chevron-right-black.svg'
import chevronRightWhite from '../../images/chevron-right-white.svg'
import { useRecoilValue } from 'recoil'
import isDarkModeState from '../../atom/isDarkModeState'

function NextPrevItem({ direction, isFirstPage, isLastPage, currentPage }) {
  const isDarkMode = useRecoilValue(isDarkModeState)

  const handleNextPrevButtonClick = () => {
    if (direction === 'next' && !isLastPage) {
      return navigate(`/blog/${currentPage + 1}`)
    }

    if (direction === 'prev' && !isFirstPage) {
      return navigate(`/blog/${currentPage - 1}`)
    }
  }

  return (
    <NextPrevItemButton onClick={handleNextPrevButtonClick}>
      {direction === 'prev' && (
        <div>
          {isDarkMode ? (
            <img src={chevronLeftWhite} alt='next' />
          ) : (
            <img src={chevronLeftBlack} alt='next' />
          )}
        </div>
      )}
      {direction === 'next' && (
        <div>
          {isDarkMode ? (
            <img src={chevronRightWhite} alt='next' />
          ) : (
            <img src={chevronRightBlack} alt='next' />
          )}
        </div>
      )}
    </NextPrevItemButton>
  )
}

const NextPrevItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--adaptiveGray100);
  }
`

export default NextPrevItem
