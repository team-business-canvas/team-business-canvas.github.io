import React from 'react'
import styled from 'styled-components'

function Hamberger({ isMenuOpen }) {
  return (
    <HambergerRoot isMenuOpen={isMenuOpen}>
      <div className={isMenuOpen ? 'active' : ''}>
        <div className='menu'></div>
      </div>
    </HambergerRoot>
  )
}

const HambergerRoot = styled.div`
  display: block;
  position: relative;
  width: 20px;
  z-index: 1010;
  cursor: pointer;

  .menu,
  .menu::before,
  .menu::after {
    position: absolute;
    background: var(--adaptiveGray900);
    content: '';
    display: block;
    height: 2px; // 바의 두께
    transition: background ease 0.2s, top ease 0.2s 0.2s, transform ease 0.2s;
    width: 20px; // 전체 가로 길이
  }

  // 중앙바
  .menu {
    left: 0px;
    top: 0px;
  }

  // 맨 위의 바
  .menu::before {
    top: -7.5px;
    height: 2px; // 두껍게
  }

  // 아래의 바
  .menu::after {
    top: 7.5px;
    height: 2px; // 두껍게
  }

  /* drawer 만든 이후 active할 이유가 없어서 삭제 */
  /* 
  .active {
    // 활성화 되면 중앙에 있는 바는 삭제

    .menu {
      background: transparent;
    }

    .menu::after {
      transform: rotate(-45deg);
    }

    .menu::before {
      transform: rotate(45deg);
    }

    .menu::before,
    .menu::after {
      top: 0px;
      transition: top ease 0.1s, transform ease 0.1s 0.1s;
    }
  } */
`

export default Hamberger
