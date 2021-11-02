import React, { useRef } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import useDetectOutsideClick from '../../hooks/useDetectOutsideClic'
import DrawerEase from '../../animations/DrawerEase'

function Drawer({ setisMenuOpen }) {
  const drawerRef = useRef(null)
  useDetectOutsideClick(drawerRef, setisMenuOpen)

  const handleHomeClick = () => {
    setisMenuOpen(false)
    navigate('/')
  }

  const handleAboutClick = () => {
    setisMenuOpen(false)
    window.location.href = 'https://www.typed.biz/career'
  }

  const handleBlogClick = () => {
    setisMenuOpen(false)
    navigate('/blog/1')
  }

  return (
    <Overlay>
      <DrawerContent ref={drawerRef}>
        <DrawerHeader>Typed!</DrawerHeader>
        <DrawerItem onClick={handleHomeClick}>Home</DrawerItem>
        <DrawerItem onClick={handleAboutClick}>About</DrawerItem>
        <DrawerItem onClick={handleBlogClick}>Blog</DrawerItem>
      </DrawerContent>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 100%;

  background-color: var(--adaptiveGray50);
  pointer-events: auto;
  animation: ${DrawerEase} 0.25s ease-in-out;
`

const DrawerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 84px;
`

const DrawerItem = styled.button`
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 24px;

  width: 100%;
  height: 50px;

  color: var(--adaptiveGray900);

  cursor: pointer;

  &:hover {
    background-color: var(--adaptiveGray100);
  }
`

export default Drawer
