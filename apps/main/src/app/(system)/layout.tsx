import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'

const SystemLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-dvh">
      <div className="flex flex-col bg-primary p-2">
        <Link href="/directory">Справочники</Link>
        <Link href="/control">Администрирование</Link>
      </div>
      <div className="w-full h-full p-4 pl-6">
        {children}
      </div>
    </div>
  )
}

export default SystemLayout