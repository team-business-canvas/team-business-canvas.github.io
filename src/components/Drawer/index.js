import { Link } from 'gatsby'
import React, { useRef } from 'react'
import styled from 'styled-components'
import useDetectOutsideClick from '../../hooks/useDetectOutsideClic'

function Drawer({ setisMenuOpen }) {
  const drawerRef = useRef(null)
  useDetectOutsideClick(drawerRef, setisMenuOpen)

  return (
    <Overlay>
      <DrawerContent ref={drawerRef}>
        <DrawerHeader>Typed!</DrawerHeader>
        <DrawerItem to='/'>Home</DrawerItem>
        <DrawerItem to='/blog/1'>About</DrawerItem>
        <DrawerItem to='/blog/1'>Blog</DrawerItem>
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
  pointer-events: 'none';
`

const DrawerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 84px;
`

const DrawerItem = styled(Link)`
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 24px;

  width: 100%;
  height: 50px;

  &:hover {
    background-color: var(--adaptiveGray100);
  }
`

export default Drawer
