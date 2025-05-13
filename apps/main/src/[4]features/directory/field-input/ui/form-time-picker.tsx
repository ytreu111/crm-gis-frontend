import { TimePicker } from 'antd'
import dayjs from 'dayjs'

export const FormTimePicker = ({ ref, value, onChange }) => {
  return (
    <TimePicker
      ref={ref}
      value={typeof value === 'string' ? dayjs(value, 'HH:mm:ss') : value}
      onChange={(v) => {
        onChange(v.format('HH:mm:ss'))
      }}
    />
  )
}