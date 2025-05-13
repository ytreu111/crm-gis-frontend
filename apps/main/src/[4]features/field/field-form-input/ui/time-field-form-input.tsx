import type { FC } from 'react'
import type { TypedFieldFormInputProps } from '../model/types'
import type { TimeFieldConstraint } from '@/entities/field'
import { TimePicker } from '@workspace/ui-kit'
import dayjs from 'dayjs'
import * as lodash from 'lodash-es'

export const TimeFieldFormInput: FC<TypedFieldFormInputProps<TimeFieldConstraint>> = (
  {
    constraint,
    ...props
  },
) => {
  return (
    <TimePicker
      {...props}
      onChange={(v) => props.onChange(v?.format('HH:mm:ss'))}
      disabledTime={() => {
        if (!constraint.min_value && !constraint.max_value) return {}

        return {
          disabledHours: () => {
            const hours: number[] = []

            if (constraint.min_value) {
              const hour = dayjs(constraint.min_value, ['HH:mm:ss', 'HH:mm']).hour()

              hours.push(...lodash.range(0, hour))
            }

            if (constraint.max_value) {
              const hour = dayjs(constraint.max_value, ['HH:mm:ss', 'HH:mm']).hour()
              hours.push(...lodash.range(hour + 1, 24))
            }

            return hours
          },
          disabledMinutes: (selectedHour) => {
            const minutes: number[] = []

            if (constraint.min_value) {
              const minValue = dayjs(constraint.min_value, ['HH:mm:ss', 'HH:mm'])

              if (selectedHour === minValue.hour()) {
                minutes.push(...lodash.range(0, minValue.minute()))
              }
            }

            if (constraint.max_value) {
              const maxValue = dayjs(constraint.max_value, ['HH:mm:ss', 'HH:mm'])

              if (selectedHour === maxValue.hour()) {
                minutes.push(...lodash.range(maxValue.minute() + 1, 60))
              }
            }

            return minutes
          },
          disabledSeconds: (selectedHour, selectedMinute) => {
            const seconds: number[] = []

            if (constraint.min_value) {
              const minValue = dayjs(constraint.min_value, ['HH:mm:ss', 'HH:mm'])

              if (selectedHour === minValue.hour() && selectedMinute === minValue.minute()) {
                seconds.push(...lodash.range(0, minValue.second()))
              }
            }

            if (constraint.max_value) {
              const maxValue = dayjs(constraint.max_value, ['HH:mm:ss', 'HH:mm'])

              if (selectedHour === maxValue.hour() && selectedMinute === maxValue.minute()) {
                seconds.push(...lodash.range(maxValue.second() + 1, 60))
              }
            }

            return seconds
          },
        }
      }}
    />
  )
}