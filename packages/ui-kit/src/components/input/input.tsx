import type { ChangeEvent, FC, Ref } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import type { InputRef } from 'antd'
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd'
import cx from 'classnames'
import styles from './input.module.scss'

type OmitAntdInputProps = Omit<AntdInputProps, 'variant' | 'onChange' | 'allowClear' | 'value' | 'defaultValue' | 'minLength' | 'maxLength'>

export interface TextInputProps extends OmitAntdInputProps {
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  value?: string | null
  minLength?: number | null
  maxLength?: number | null
  defaultValue?: string | null
  allowClear?: boolean
  className?: string
  error?: boolean
  ref?: Ref<InputRef>
}

export const Input: FC<TextInputProps> = (
  {
    allowClear = true,
    onChange,
    className,
    classNames: classes = {},
    value,
    defaultValue,
    minLength,
    maxLength,
    error,
    ref,
    ...props
  },
) => {
  const classNames = {
    ...classes,
    input: cx(styles.input, classes.input),
    prefix: cx(styles['input-prefix'], classes.prefix),
    suffix: cx(styles['input-suffix'], classes.suffix),
  }

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    onChange && onChange(value, e)
  }

  return (
    <AntdInput
      ref={ref}
      {...props}
      value={value ?? undefined}
      defaultValue={defaultValue ?? undefined}
      minLength={minLength ?? undefined}
      maxLength={maxLength ?? undefined}
      rootClassName={cx(className, styles['input-wrap'])}
      classNames={classNames}
      variant={null as any}
      allowClear={allowClear && { clearIcon: <CloseOutlined /> }}
      onChange={_onChange}
    />
  )
}
