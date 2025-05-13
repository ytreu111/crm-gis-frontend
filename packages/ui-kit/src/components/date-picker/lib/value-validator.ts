import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

export function valueValidator(
  value?: string | Dayjs | null,
  parseFormat?: string | string[],
  strictParse?: boolean,
) {
  if (typeof value === 'string') {
    const newV = dayjs(value, parseFormat, strictParse)

    if (newV.isValid()) {
      return newV
    }

    return null
  }

  if (value && value.isValid()) {
    return value
  }

  return null
}
