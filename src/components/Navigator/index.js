import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import ShowUp from '../../../animations/ShowUp'

function Navigator() {
  return (
    <NavigatorRoot>
      <NavigatorItem to='/'>HOME</NavigatorItem>
      <NavigatorItem to='/about'>ABOUT</NavigatorItem>
    </NavigatorRoot>
  )
}

const NavigatorRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  /* background-color: ${({ theme }) => `var(--adaptiveGray900)`}; */
  /* background-color: var(--adaptiveGray50); */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  z-index: 1000;

  animation: ${ShowUp} 0.2s ease;
`

const NavigatorItem = styled(Link)`
  color: var(--adaptiveGray900);
`

export default Navigator
