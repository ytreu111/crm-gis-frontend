import { FormDatePicker } from './ui/form-date-picker'
import { FormDatetimePicker } from './ui/form-datetime-picker'
import { FormTimePicker } from './ui/form-time-picker'

export type CompoundedComponent = {
  DatePicker: typeof FormDatePicker
  DatetimePicker: typeof FormDatetimePicker
  TimePicker: typeof FormTimePicker
}

export const FormInput = {} as CompoundedComponent

FormInput.DatePicker = FormDatePicker
FormInput.DatetimePicker = FormDatetimePicker
FormInput.TimePicker = FormTimePicker