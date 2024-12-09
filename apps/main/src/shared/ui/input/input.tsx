'use client'

import { ChangeEvent, FC, JSX, useState } from 'react'

import styles from './input.module.scss'

type DefaultHtmlInputProps = JSX.IntrinsicElements['input']

export interface InputProps extends Omit<DefaultHtmlInputProps, 'onChange'> {
  onChange?: (v: string, e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (
  {
    onChange,
    value,
    ...props
  },
) => {
  const [_value, setValue] = useState(value ?? '')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    onChange && onChange(value, e)
    setValue(value)
  }

  return (
    <input
      value={_value}
      className={styles.input}
      onChange={onChangeHandler}
      {...props}
    />
  )
}