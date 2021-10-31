import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NotFoundPage = () => {
  return (
    <NotFoundPageRoot>
      <img src='https://http.cat/404' alt='404' />
      <Link to='/'>Go Home</Link>
    </NotFoundPageRoot>
  )
}

const NotFoundPageRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default NotFoundPage
