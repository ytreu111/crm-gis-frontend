import { useEffect, useState } from 'react'

export const useAutoThemeMode = () => {
  const [autoMode, setAutoMode] = useState(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

  useEffect(() => {
    const onChangeAutoMode = (event: MediaQueryListEvent) => {
      setAutoMode(event.matches ? 'light' : 'dark')
    }

    const matchMedia = window.matchMedia('(prefers-color-scheme: light)')

    matchMedia.addEventListener('change', onChangeAutoMode)

    return () => {
      matchMedia.removeEventListener('change', onChangeAutoMode)
    }
  }, [])

  return autoMode
}
