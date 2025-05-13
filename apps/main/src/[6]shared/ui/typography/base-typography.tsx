import type { FC, ReactNode } from 'react'
import classNames from 'classnames'

export type TypographyType = 'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'inherit'

export interface BaseTypographyProps {
  className?: string
  type?: TypographyType
  children?: ReactNode
}

const typeVariants = {
  default: 'text-text-primary',
  secondary: 'text-text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  inherit: 'text-inherit',
}

export const BaseTypography: FC<BaseTypographyProps> = (
  {
    type = 'default',
    className,
    children,
  },
) => {
  const _className = classNames(
    className,
    typeVariants[type],
  )

  return (
    <span className={_className}>{children}</span>
  )
}