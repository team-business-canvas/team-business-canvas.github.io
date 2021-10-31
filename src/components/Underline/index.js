import React from 'react'
import styled from 'styled-components'

const S = {
  p: styled.p`
    display: inline;
    padding: 0 3px;
    box-shadow: inset 0 -8px 0 #bfe0fe;
    margin-bottom: 5px;
    transition: box-shadow 0.3s ease-out, background-color 0.3s ease-out;
  `,
}

function UnderLine({ text }) {
  return <S.p>{text}</S.p>
}

export default UnderLine
