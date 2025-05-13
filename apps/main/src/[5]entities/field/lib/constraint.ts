import type { ZodType } from 'zod'
import { FieldTypeEnum } from '../model/field'
import {
  DateFieldConstraintSchema,
  DateTimeFieldConstraintSchema,
  IntegerFieldConstraintSchema,
  StringFieldConstraintSchema,
  TimeFieldConstraintSchema,
} from '../model/constraint'

export const fieldConstraintSchemaByType: Record<FieldTypeEnum, ZodType> = {
  [FieldTypeEnum.Integer]: IntegerFieldConstraintSchema,
  [FieldTypeEnum.String]: StringFieldConstraintSchema,
  [FieldTypeEnum.Date]: DateFieldConstraintSchema,
  [FieldTypeEnum.DateTime]: DateTimeFieldConstraintSchema,
  [FieldTypeEnum.Time]: TimeFieldConstraintSchema,
}
