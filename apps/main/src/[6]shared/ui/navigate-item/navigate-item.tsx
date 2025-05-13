import cx from 'classnames'
import { Text } from '@/shared/ui/typography'
import styles from './navigate-item.module.scss'

export const NavigateItem = (
  {
    active,
    icon,
    large,
    rounded,
    disabled,
    children,
  },
) => {
  const className = cx(
    styles.wrap,
    {
      [styles.active]: active,
      [styles.rounded]: rounded,
      [styles.large]: large,
      [styles.disabled]: disabled,
      [styles['icon-only']]: icon && !children,
    },
  )

  return (
    <div className={className}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {children && <Text size={1} type="inherit">{children}</Text>}
    </div>
  )
}