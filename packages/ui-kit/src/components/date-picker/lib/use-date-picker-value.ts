import type { Dayjs } from 'dayjs'
import { useMergedState } from 'rc-util'
import { valueValidator } from './value-validator'

export type DatePickerValue = string | Dayjs | null

export function useDatePickerValue(
  defaultValue?: DatePickerValue,
  value?: DatePickerValue,
  parseFormat?: string | string[],
  strictParse?: boolean,
) {
  return useMergedState(
    valueValidator(defaultValue, parseFormat, strictParse),
    {
      value: value as Dayjs | null,
      postState: (v) => valueValidator(v, parseFormat, strictParse),
    },
  )
}
