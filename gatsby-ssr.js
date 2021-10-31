/* eslint-disable */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/theme'
import './style/reset.css'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={Theme}>{element}</ThemeProvider>
}
