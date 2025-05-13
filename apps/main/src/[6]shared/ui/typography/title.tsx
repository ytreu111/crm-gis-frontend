import type { BaseTypographyProps } from './base-typography'
import type { FC } from 'react'
import classNames from 'classnames'
import { BaseTypography } from './base-typography'

export interface TitleProps extends BaseTypographyProps {
  size?: 1 | 2 | 3 | 4 | 5
}

const sizeVariants = {
  1: 'text-title-1',
  2: 'text-title-2',
  3: 'text-title-3',
  4: 'text-title-4',
  5: 'text-title-5',
}

export const Title: FC<TitleProps> = (
  {
    type,
    size = 5,
    className,
    children,
  },
) => {
  const _className = classNames(
    className,
    sizeVariants[size],
    'font-medium',
  )

  return (
    <BaseTypography className={_className} type={type}>
      {children}
    </BaseTypography>
  )
}