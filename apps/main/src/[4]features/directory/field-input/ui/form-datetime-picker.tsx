import { DatePicker } from 'antd'
import dayjs from 'dayjs'

export const FormDatetimePicker = ({ ref, value, onChange }) => {
  return (
    <DatePicker
      ref={ref}
      showTime
      format="MM-DD-YYYY HH:mm:ss"
      value={typeof value === 'string' ? dayjs(value) : value}
      onChange={(v) => {
        onChange(v?.toISOString())
      }}
    />
  )
}