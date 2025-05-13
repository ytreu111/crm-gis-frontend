'use client'

import type { FC } from 'react'
import { DatePicker as AntdDatePicker, DatePickerProps as AntdDatePickerProps } from 'antd'
import cx from 'classnames'
import styles from './date-picker.module.scss'
import { DatePickerValue, useDatePickerValue } from './lib/use-date-picker-value'
import { Dayjs } from 'dayjs'

type OmitAntdDatePickerProps = Omit<AntdDatePickerProps, 'format' | 'value' | 'onChange' | 'defaultValue'>

export interface DatePickerProps extends OmitAntdDatePickerProps {
  viewFormat?: string
  parseFormat?: string | string[]
  strictParse?: boolean
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  onChange?: ((date: Dayjs | null, dateString: (string | string[])) => void)
}

export const DatePicker: FC<DatePickerProps> = (
  {
    className,
    popupClassName,
    showTime,
    viewFormat,
    parseFormat,
    defaultValue,
    value,
    strictParse,
    onChange,
    ...props
  },
) => {
  const [internalValue, setInternalValue] = useDatePickerValue(defaultValue, value, parseFormat, strictParse)

  let format = showTime ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY'
  format = viewFormat ?? format

  const handleOnChange = (newValue: Dayjs, dateString: string | string[]) => {
    if (onChange) onChange(newValue, dateString)
    setInternalValue(newValue)
  }

  return (
    <AntdDatePicker
      {...props}
      className={cx(styles['date-picker-input'], className)}
      popupClassName={cx(styles['date-picker-popup'], popupClassName)}
      format={format}
      onChange={handleOnChange}
      value={internalValue}
      showTime={showTime}
    />
  )
}