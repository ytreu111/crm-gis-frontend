import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

const ControlLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex gap-2 w-full h-full">
      <div className="flex flex-col bg-primary p-2">
        <Link href={'/control/users'}>Пользователи</Link>
        <Link href={'/control/roles'}>Роли</Link>
        <Link href={'/control/directory'}>Справочники</Link>
        <Link href={'/control/layers'}>Слои</Link>
      </div>
      {children}
    </div>
  )
}

export default ControlLayout