import { ChangeEvent, forwardRef } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { STextInput } from './Input.styled'
import { InputRef } from 'antd'

export interface TextInputProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  allowClear?: boolean
}

export const Input = forwardRef<InputRef, TextInputProps>((
  {
    allowClear = true,
    onChange,
    ...props
  },
  ref
) => {
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    onChange && onChange(value, e)
  }

  return (
    <STextInput
      ref={ref}
      {...props}
      // @ts-expect-error
      variant={null}
      allowClear={allowClear && { clearIcon: <CloseOutlined /> }}
      onChange={_onChange}
    />
  )
})
