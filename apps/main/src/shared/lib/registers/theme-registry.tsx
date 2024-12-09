'use client'

import { FC, PropsWithChildren } from 'react'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'

export const ThemeRegistry: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <ConfigProvider theme={{ hashed: false, token: { fontFamily: '' } }}>
        {children}
      </ConfigProvider>
    </ThemeProvider>
  )
}