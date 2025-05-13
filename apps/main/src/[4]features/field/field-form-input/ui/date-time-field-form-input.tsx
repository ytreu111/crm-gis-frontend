import type { FC } from 'react'
import type { TypedFieldFormInputProps } from '../model/types'
import type { DateTimeFieldConstraint } from '@/entities/field'
import { DatePicker } from '@workspace/ui-kit'
import dayjs from 'dayjs'
import * as lodash from 'lodash-es'

export const DateTimeFieldFormInput: FC<TypedFieldFormInputProps<DateTimeFieldConstraint>> = (
  {
    constraint,
    ...props
  },
) => {
  console.log(constraint)
  return (
    <DatePicker
      {...props}
      open
      onChange={(v) => props.onChange(v?.toISOString())}
      showTime
      disabledTime={(v) => {
        if (!constraint.min_value && !constraint.max_value) return {}
        console.log(v)

        return {
          disabledHours: () => {
            const hours: number[] = []

            if (constraint.min_value) {
              const minValue = dayjs(constraint.min_value)

              if (v.format('YYYY-MM-DD') === minValue.format('YYYY-MM-DD')) {
                const hour = dayjs(constraint.min_value).hour()
                hours.push(...lodash.range(0, hour))
              }
            }

            // if (constraint.max_value) {
            //   const hour = dayjs(constraint.max_value).hour()
            //   hours.push(...lodash.range(hour + 1, 24))
            // }

            return hours
          },
          disabledMinutes: (selectedHour) => {
            const minutes: number[] = []

            if (constraint.min_value) {
              const minValue = dayjs(constraint.min_value)

              if (selectedHour === minValue.hour()) {
                minutes.push(...lodash.range(0, minValue.minute()))
              }
            }

            if (constraint.max_value) {
              const maxValue = dayjs(constraint.max_value)

              if (selectedHour === maxValue.hour()) {
                minutes.push(...lodash.range(maxValue.minute() + 1, 60))
              }
            }

            return minutes
          },
          disabledSeconds: (selectedHour, selectedMinute) => {
            const seconds: number[] = []

            if (constraint.min_value) {
              const minValue = dayjs(constraint.min_value)

              if (selectedHour === minValue.hour() && selectedMinute === minValue.minute()) {
                seconds.push(...lodash.range(0, minValue.second()))
              }
            }

            if (constraint.max_value) {
              const maxValue = dayjs(constraint.max_value)

              if (selectedHour === maxValue.hour() && selectedMinute === maxValue.minute()) {
                seconds.push(...lodash.range(maxValue.second() + 1, 60))
              }
            }

            return seconds
          },
        }
      }}
      disabledDate={(v, { type }) => {
        if (constraint.min_value) {
          const minValue = dayjs(constraint.min_value)

          if (type === 'year') {
            if (v.year() < minValue.year()) return true
          } else if (type === 'month') {
            if (v.month() < minValue.month()) return true
          } else if (v.isBefore(minValue.format('YYYY-MM-DD'))) {
            return true
          }
        }

        if (constraint.max_value) {
          const maxValue = dayjs(constraint.max_value)

          if (type === 'year') {
            if (v.year() > maxValue.year()) return true
          } else if (type === 'month') {
            if (v.month() > maxValue.month()) return true
          } else if (v.isAfter(maxValue.format('YYYY-MM-DD'))) {
            return true
          }
        }

        return false
      }}
    />
  )
}