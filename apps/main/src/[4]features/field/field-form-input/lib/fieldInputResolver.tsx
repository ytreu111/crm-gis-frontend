import type { Field} from '@/entities/field';
import { FieldTypeEnum } from '@/entities/field'
import { IntegerFieldFormInput } from '../ui/integer-field-form-input'
import { StringFieldFormInput } from '../ui/string-field-form-input'
import { DateFieldFormInput } from '../ui/date-field-form-input'
import { DateTimeFieldFormInput } from '../ui/date-time-field-form-input'
import { TimeFieldFormInput } from '../ui/time-field-form-input'

export function fieldInputResolver(field: Field) {
  switch (field.type) {
    case FieldTypeEnum.Integer: {
      return IntegerFieldFormInput
    }
    case FieldTypeEnum.String: {
      return StringFieldFormInput
    }
    case FieldTypeEnum.Date: {
      return DateFieldFormInput
    }
    case FieldTypeEnum.DateTime: {
      return DateTimeFieldFormInput
    }
    case FieldTypeEnum.Time: {
      return TimeFieldFormInput
    }
    default:
      throw new Error('not implemented')
  }
}