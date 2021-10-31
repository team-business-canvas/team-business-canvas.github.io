import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import LightFullLogo from '../../images/light-full-logo.svg'
import DarkFullLogo from '../../images/dark-full-logo.png'
import styled from 'styled-components'
import { HEADER_HEIGHT, HEADER_LOGO_HEIGHT } from '../../constants'
import Hamberger from './hamberger'

function Header() {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.body.classList.contains('dark-mode')
  )

  const menuClick = () => {
    setisMenuOpen(!isMenuOpen)
  }

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true)
    }
    if (window.pageYOffset === 0) {
      setIsScroll(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll)
    return () => {
      window.removeEventListener('mousewheel', handleScroll)
    }
  }, [handleScroll])

  const darkModeButtonClick = () => {
    document.body.classList.toggle('dark-mode')
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <HeaderRoot isScroll={isScroll}>
      <LeftPanel className='right-panel'>
        <div
          role='button'
          tabIndex={0}
          style={{ cursor: 'pointer' }}
          onClick={menuClick}
        >
          <Hamberger isMenuOpen={isMenuOpen} />
        </div>
      </LeftPanel>

      <Link to='/'>
        <LogoImg src={isDarkMode ? DarkFullLogo : LightFullLogo} alt='logo' />
      </Link>

      <RightPanel className='left-panel'>
        <button onClick={darkModeButtonClick}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </RightPanel>
    </HeaderRoot>
  )
}

const HeaderRoot = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${HEADER_HEIGHT}px;

  border-bottom: 1px solid var(--adaptiveGray200);
  padding: 0 2rem;

  background-color: var(--adaptiveGray50);
`

const LeftPanel = styled.div``
const RightPanel = styled.div``

const LogoImg = styled.img`
  height: ${HEADER_LOGO_HEIGHT}px;
`
export default Header
