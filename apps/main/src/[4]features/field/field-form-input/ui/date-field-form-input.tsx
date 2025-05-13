import type { FC } from 'react'
import type { TypedFieldFormInputProps } from '../model/types'
import type { DateFieldConstraint } from '@/entities/field'
import { DatePicker } from '@workspace/ui-kit'
import dayjs from 'dayjs'

export const DateFieldFormInput: FC<TypedFieldFormInputProps<DateFieldConstraint>> = (
  {
    constraint,
    ...props
  },
) => {
  return (
    <DatePicker
      {...props}
      onChange={(v) => props.onChange(v?.format('YYYY-MM-DD'))}
      disabledDate={(v, { type }) => {
        if (constraint.min_value) {
          const minValue = dayjs(constraint.min_value)

          if (type === 'year') {
            if (v.year() < minValue.year()) return true
          } else if (type === 'month') {
            if (v.month() < minValue.month()) return true
          } else if (v.isBefore(minValue)) {
            return true
          }
        }

        if (constraint.max_value) {
          const maxValue = dayjs(constraint.max_value)

          if (type === 'year') {
            if (v.year() > maxValue.year()) return true
          } else if (type === 'month') {
            if (v.month() > maxValue.month()) return true
          } else if (v.isAfter(maxValue)) {
            return true
          }
        }

        return false
      }}
    />
  )
}