import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

function Layout(props) {
  const { data, children } = props

  const socialData = useStaticQuery(graphql`
    query SnsQuery {
      site {
        siteMetadata {
          social {
            youtube
            facebook
            rocketpunch
            typed
          }
        }
      }
    }
  `)

  console.log(socialData)

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
