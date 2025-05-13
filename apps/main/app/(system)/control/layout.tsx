import type { FC, PropsWithChildren } from 'react'
import { ControlMenu } from '@/widgets/control/control-menu'

const ControlLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full h-full gap-2">
      <ControlMenu />
      <div className="w-full h-full bg-bg p-2 rounded-md overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default ControlLayout