import { DatePicker } from 'antd'
import dayjs from 'dayjs'

export const FormDatePicker = ({ ref, value, onChange, error }) => {
  return (
    <DatePicker
      ref={ref}
      format="MM-DD-YYYY"
      value={typeof value === 'string' ? dayjs(value) : value}
      onChange={(v) => {
        onChange(v?.format('YYYY-MM-DD'))
      }}
      status={error && 'error'}
    />
  )
}