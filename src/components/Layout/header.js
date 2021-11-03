import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'gatsby'
import LightFullLogo from '../../images/light-full-logo.svg'
import DarkFullLogo from '../../images/dark-full-logo.png'
import styled from 'styled-components'
import { DARK_MODE, HEADER_HEIGHT, HEADER_LOGO_HEIGHT } from '../../constants'
import { isDarkModeEnabled } from '../../util'
import Sun from '../../images/sun.svg'
import Moon from '../../images/moon.svg'
import MenuBlack from '../../images/menu-black.svg'
import MenuWhite from '../../images/menu-white.svg'
import { useRecoilState } from 'recoil'

import { Drawer } from '..'
import isDarkModeState from '../../atom/isDarkModeState'

function Header() {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState)

  const menuClick = () => {
    setisMenuOpen(!isMenuOpen)
  }

  useLayoutEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(DARK_MODE)
    } else {
      document.body.classList.remove(DARK_MODE)
    }
  }, [])

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
    document.body.classList.toggle(DARK_MODE)
    setIsDarkMode(isDarkMode => !isDarkMode)
    localStorage.setItem(DARK_MODE, !isDarkMode)
  }

  return (
    <>
      {isMenuOpen && <Drawer setisMenuOpen={setisMenuOpen} />}
      <HeaderRoot isScroll={isScroll}>
        <LeftPanel className='right-panel'>
          <div
            role='button'
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={menuClick}
          >
            {isDarkMode ? (
              <SvgImg src={MenuWhite} alt='menu' />
            ) : (
              <SvgImg src={MenuBlack} alt='menu' />
            )}
          </div>
        </LeftPanel>

        <Link to='/'>
          <LogoImg src={isDarkMode ? DarkFullLogo : LightFullLogo} alt='logo' />
        </Link>

        <RightPanel className='left-panel'>
          <button onClick={darkModeButtonClick} style={{ cursor: 'pointer' }}>
            {isDarkMode ? (
              <SvgImg src={Sun} alt='sun' style={{ color: 'white' }} />
            ) : (
              <SvgImg src={Moon} alt='moon' />
            )}
          </button>
        </RightPanel>
      </HeaderRoot>
    </>
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
  padding: 0 ${props => props.theme.paddings.xxxxxl};
  background-color: var(--adaptiveGray50);

  ${props => props.theme.deviceSizes.desktop} {
    padding: 0 ${props => props.theme.paddings.global};
  }
`

const LeftPanel = styled.div``
const RightPanel = styled.div``

const LogoImg = styled.img`
  height: ${HEADER_LOGO_HEIGHT}px;
`

const SvgImg = styled.img`
  box-sizing: border-box;
  width: 32px;
  height: 32px;

  padding: 4px;

  border-radius: 6px;

  &:hover {
    background-color: var(--adaptiveGray100);
  }
`

export default Header
