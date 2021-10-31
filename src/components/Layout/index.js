import React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

function Layout(props) {
  const { children } = props

  return (
    <LayoutRoot>
      <Header />
      {children}
      <Footer />
    </LayoutRoot>
  )
}

const LayoutRoot = styled.div`
  height: 200vh;
`

export default Layout
