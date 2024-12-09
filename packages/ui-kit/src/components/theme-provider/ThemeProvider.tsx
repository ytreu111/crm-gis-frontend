import { FC, ReactNode } from 'react'
import type { Theme } from '../../style'
import { useMemo } from 'react'
import { createGlobalStyle, StyleSheetManager, ThemeProvider as StyledThemeProvider } from 'styled-components'
import * as lodash from 'lodash-es'
import { generalTheme, darkTheme } from '../../style'
import { ConfigProvider } from 'antd'
import { StyleFunction } from 'styled-components/dist/types'
import { GlobalStyle } from './GlobalStyle'


type DefaultTheme = Theme

export type ThemeMode = 'light' | 'dark' | 'auto'

export interface ThemeProviderProps {
  mode?: ThemeMode;
  children?: ReactNode;
}

function test(theme: Record<string, any>, prevKey = '-') {
  const entries = Object.entries(theme)

  return entries.reduce((acc, [key, value]) => {
    const newKey = prevKey + '-' + key

    if (typeof value === 'object') {
      acc = { ...acc, ...test(value, newKey) }
    } else {
      acc[newKey] = value
    }

    return acc
  }, {} as Record<string, any>)
}

const create: StyleFunction<Record<string, any>> = (props) => {
  return test(props.theme)
}

const GlobalTheme = createGlobalStyle`
  :root {
    ${create}
  }
`

export const ThemeProvider: FC<ThemeProviderProps> = (
  {
    children,
  },
) => {
  const theme = useMemo(() => lodash.merge({}, generalTheme, darkTheme), [])

  return (
    <StyleSheetManager enableVendorPrefixes>
      <StyledThemeProvider theme={theme as DefaultTheme}>
        <GlobalTheme />
        <GlobalStyle />
        {/* @ts-ignore*/}
        <ConfigProvider theme={{ hashed: false, token: { fontFamily: 'inherit', fontSize: '' } }}>
          {children}
        </ConfigProvider>
      </StyledThemeProvider>
    </StyleSheetManager>
  )
}
