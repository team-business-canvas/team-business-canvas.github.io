import React from 'react'
import styled from 'styled-components'

function DarkLightToggle({ onClick }) {
  return (
    <DarkLightToggleRoot onClick={onClick}>
      <input type='checkbox' className='checkbox' id='toggle' />
      <label className='label' htmlFor='toggle'>
        <i className='fas fa-moon'></i>
        <i className='fas fa-sun'></i>
        <div className='ball'></div>
      </label>
    </DarkLightToggleRoot>
  )
}

const DarkLightToggleRoot = styled.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    background-color: #111;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 26px;
    width: 50px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }

  .fa-moon {
    color: #f1c40f;
  }

  .fa-sun {
    color: #f39c12;
  }
`

export default DarkLightToggle
