import type { FC, PropsWithChildren } from 'react'
import { AppMenu } from '@/widgets/app-menu'

const SystemLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-dvh">
      <AppMenu />
      <div className="w-full h-full p-2 pl-3">
        {children}
      </div>
    </div>
  )
}

export default SystemLayout