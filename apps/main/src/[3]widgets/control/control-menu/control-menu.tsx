'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Title } from '@/shared/ui/typography'
import { NavigateItem } from '@/shared/ui/navigate-item'

const menuItems = [
  { href: '/control/users', label: 'Пользователи', disabled: true },
  { href: '/control/role', label: 'Роли', disabled: true },
  { href: '/control/directory', label: 'Справочники', disabled: false },
  { href: '/control/layers', label: 'Слои', disabled: true },
  { href: '/control/system', label: 'Системные настройки', disabled: true },
]

export const ControlMenu = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col shrink-0 bg-bg rounded-md w-[230px] h-full ">
      <div className="py-2 mx-auto">
        <Title size={4}>Администрирование</Title>
      </div>
      <div className="flex flex-col">
        {
          menuItems.map((el) => {
            const isActive = pathname.startsWith(el.href)

            return (
              <div key={el.href} className={el.disabled ? 'pointer-events-none' : ''}>
                <Link href={el.href}>
                  <NavigateItem
                    active={isActive}
                    disabled={el.disabled}
                  >
                    {el.label}
                  </NavigateItem>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}