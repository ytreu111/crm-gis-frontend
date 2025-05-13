'use client'

import { TimePicker as AntdTimePicker, TimePickerProps as AntdTimePickerProps } from 'antd'
import styles from './time-picker.module.scss'
import cx from 'classnames'
import { FC } from 'react'
import { Dayjs } from 'dayjs'
import { DatePickerValue, useDatePickerValue } from '../date-picker'

type OmitAntdTimePickerProps = Omit<AntdTimePickerProps, 'format' | 'value' | 'onChange' | 'defaultValue'>

export interface TimePickerProps extends OmitAntdTimePickerProps {
  viewFormat?: string
  parseFormat?: string | string[]
  strictParse?: boolean
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  onChange?: ((date: Dayjs | null, dateString: (string | string[])) => void)
}

export const TimePicker: FC<TimePickerProps> = (
  {
    className,
    popupClassName,
    viewFormat,
    parseFormat = ['HH:mm:ss', 'HH:mm'],
    defaultValue,
    value,
    strictParse,
    onChange,
    ...props
  },
) => {
  const [internalValue, setInternalValue] = useDatePickerValue(defaultValue, value, parseFormat, strictParse)

  const handleOnChange = (newValue: Dayjs, dateString: string | string[]) => {
    if (onChange) onChange(newValue, dateString)
    setInternalValue(newValue)
  }

  return (
    <AntdTimePicker
      needConfirm={false}
      {...props}
      className={cx(styles['time-picker-input'], className)}
      popupClassName={cx(styles['time-picker-popup'], popupClassName)}
      onChange={handleOnChange}
      value={internalValue}
    />
  )
}