import type { FC } from 'react'
import type { BaseTypographyProps } from './base-typography'
import classNames from 'classnames'
import { BaseTypography } from './base-typography'

export interface TextProps extends BaseTypographyProps {
  size?: 1 | 2 | 3
  strong?: boolean
}

const sizeVariants = {
  1: 'text-1',
  2: 'text-2',
  3: 'text-3',
}

export const Text: FC<TextProps> = (
  {
    size = 2,
    type,
    strong,
    className,
    children,
  },
) => {
  const _className = classNames(
    className,
    sizeVariants[size],
    'leading-normal',
    {
      'font-normal': !strong,
      'font-medium': strong,
    },
  )

  return (
    <BaseTypography
      className={_className}
      type={type}
    >
      {children}
    </BaseTypography>
  )
}
