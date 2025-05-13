import * as v from 'valibot'
import { Dayjs, isDayjs } from 'dayjs'

export const dateValibot = v.custom<string | Dayjs>((value) => {
  if (isDayjs(value)) {
  }

  if (typeof value === 'string') {
  }

  return false
})