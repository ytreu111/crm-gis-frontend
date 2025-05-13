'use client'

import cx from 'classnames'
import { usePathname } from 'next/navigation'
import { DocumentIcon, DoubleLeftArrowIcon, FolderIcon, LayersIcon, SettingsIcon } from '@workspace/icons'
import Link from 'next/link'
import { NavigateItem } from '@/shared/ui/navigate-item'
import styles from './app-menu.module.scss'

const menuItems = [
  { href: '/map', icon: <LayersIcon />, disabled: true },
  { href: '/directory', icon: <FolderIcon />, disabled: false },
  { href: '/reports', icon: <DocumentIcon />, disabled: true },
  { href: '/control', icon: <SettingsIcon />, disabled: false },
]

export const AppMenu = () => {
  const pathname = usePathname()

  return (
    <div className={'relative'}>
      <div className={styles['open-button']}>
        <DoubleLeftArrowIcon />
      </div>
      <div className={cx(styles['app-menu-wrap'])}>
        <div className="flex flex-col items-center">
          {
            menuItems.map((el) => {
              const isActive = pathname.startsWith(el.href)

              return (
                <div key={el.href} className={el.disabled ? 'pointer-events-none' : ''}>
                  <Link href={el.href}>
                    <NavigateItem
                      large
                      rounded
                      icon={el.icon}
                      active={isActive}
                      disabled={el.disabled}
                    />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
