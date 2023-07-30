// HomePage.js

import React, { useState, useEffect } from 'react'
import { ConfigProvider, Input } from 'antd'
import trTR from 'antd/lib/locale/tr_TR'
import styled, { ThemeProvider } from 'styled-components'

import { thunder} from './tailwindTheme'

import classNames from 'classnames'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`

const ButtonContainer = styled.div`
  ${`mt-4`}
`

const Theme = (props) => {
  const { children } = props
  
  const customTheme = {
    token: thunder,
  }
  return (
    <ThemeProvider theme={thunder}>
      <ConfigProvider theme={customTheme}>{children}</ConfigProvider>
    </ThemeProvider>
  )
}

export default Theme
