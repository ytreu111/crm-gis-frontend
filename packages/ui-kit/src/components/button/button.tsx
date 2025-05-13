import type { FC, ReactNode } from 'react'
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd'
import cx from 'classnames'
import styles from './button.module.scss' with { type: 'css' }

type PickedAntdButtonProps = Pick<AntdButtonProps, 'onClick' | 'htmlType'>

export interface ButtonProps extends PickedAntdButtonProps {
  size?: 'small' | 'middle' | 'large'
  variant?: 'solid' | 'filled' | 'outlined' | 'text' | 'link'
  color?: 'default' | 'additional'
  rounded?: 'small' | 'large' | 'round' | false
  icon?: ReactNode
  className?: string
  children?: ReactNode
  loading?: boolean
}

export const Button: FC<ButtonProps> = (
  {
    size = 'middle',
    variant = 'solid',
    color = 'default',
    rounded = 'small',
    className,
    children,
    ...props
  },
) => {
  const _className = cx(
    className,
    styles.button,
    {
      [styles['variant-solid']]: variant === 'solid',
      [styles['variant-filled']]: variant === 'filled',
      [styles['variant-outlined']]: variant === 'outlined',
      [styles['variant-text']]: variant === 'text',
      [styles['variant-link']]: variant === 'link',
    },
    {
      [styles['color-default']]: color === 'default',
      [styles['color-additional']]: color === 'additional',
    },
    {
      [styles['rounded-round']]: rounded === 'round',
      [styles['rounded-small']]: rounded === 'small',
      [styles['rounded-large']]: rounded === 'large',
    },
    {
      [styles['size-small']]: size === 'small',
      [styles['size-middle']]: size === 'middle',
      [styles['size-large']]: size === 'large',
    },
  )

  return (
    <AntdButton
      {...props}
      className={_className}
      color="default"
      variant={variant}
    >
      {children && (
        <span className={styles['button-content']}>{children}</span>
      )}
    </AntdButton>
  )
}