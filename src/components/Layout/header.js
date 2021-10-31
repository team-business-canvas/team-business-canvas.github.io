import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import fullLogo from '../../images/fullLogo.svg'
import styled from 'styled-components'
import { HEADER_HEIGHT } from '../../constants'
import Hamberger from './hamberger'
import Navigator from '../Navigator'

function Header() {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setisMenuOpen] = useState(false)

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

  return (
    <>
      <HeaderRoot isScroll={isScroll}>
        {isMenuOpen && <Navigator />}
        <LeftPanel className='right-panel'>
          <Link to='/'>
            <img src={fullLogo} alt='logo' />
          </Link>
        </LeftPanel>

        <RightPanel className='left-panel'>
          <div style={{ cursor: 'pointer' }} onClick={menuClick}>
            <Hamberger isMenuOpen={isMenuOpen} />
          </div>
        </RightPanel>
      </HeaderRoot>
    </>
  )
}

const HeaderRoot = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${HEADER_HEIGHT}px;

  border-bottom: 1px solid var(--adaptiveGray300);
  padding: 0 2rem;

  background-color: var(--adaptiveGray50);
`

const LeftPanel = styled.div``
const RightPanel = styled.div``

export default Header
