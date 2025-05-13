'use client'

import type { FC, PropsWithChildren } from 'react'
import { AntdConfigProvider } from '@workspace/ui-kit'
import { QueryClientProvider } from '@/shared/lib/providers'

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider>
      <AntdConfigProvider>
        {children}
      </AntdConfigProvider>
    </QueryClientProvider>
  )
}