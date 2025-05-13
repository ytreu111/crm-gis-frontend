import type {
  Field,
  DateField,
  DateTimeField,
  IntegerField,
  StringField,
  TimeField,
} from '../model/field'
import { z } from 'zod'
import dayjs from 'dayjs'
import {
  FieldTypeEnum,
} from '../model/field'

export const FieldTypeTranslateEnum: Record<FieldTypeEnum, string> = {
  [FieldTypeEnum.Integer]: 'Число',
  // [FieldTypeEnum.Float]: 'Число с плавающей точкой',
  [FieldTypeEnum.String]: 'Строка',
  [FieldTypeEnum.Date]: 'Дата',
  [FieldTypeEnum.DateTime]: 'Дата со временем',
  [FieldTypeEnum.Time]: 'Время',
}

export function generateIntegerFieldSchema(field: IntegerField) {
  const { constraint, required } = field
  let fieldSchema = z.number()

  if (typeof constraint.min_value === 'number') {
    fieldSchema = fieldSchema.min(constraint.min_value)
  }

  if (typeof constraint.max_value === 'number') {
    fieldSchema = fieldSchema.max(constraint.max_value)
  }

  if (!required) {
    fieldSchema = fieldSchema.nullish()
  }

  return fieldSchema
}

export function generateStringFieldSchema(field: StringField) {
  const { constraint, required } = field
  let fieldSchema = z.string()

  if (typeof constraint.min_length === 'number') {
    fieldSchema = fieldSchema.min(constraint.min_length)
  }

  if (typeof constraint.max_length === 'number') {
    fieldSchema = fieldSchema.max(constraint.max_length)
  }

  if (!required) {
    fieldSchema = fieldSchema.nullish()
  } else if (!constraint.min_length) {
    fieldSchema = fieldSchema.min(1)
  }

  return fieldSchema

}

export function generateDateFieldSchema(field: DateField) {
  const { constraint, required } = field
  let fieldSchema = z.string()

  if (typeof constraint.min_value === 'string') {
    fieldSchema = fieldSchema.refine((v) => dayjs(v).isAfter(constraint.min_value), {
      message: 'todo date min value message',
    })
  }

  if (typeof constraint.max_value === 'string') {
    fieldSchema = fieldSchema.refine((v) => dayjs(v).isBefore(constraint.max_value), {
      message: 'todo date max value message',
    })
  }

  if (!required) {
    fieldSchema = fieldSchema.optional()
  } else {
    fieldSchema.refine((v) => dayjs(v).isValid(), {
      message: 'todo date valid message',
    })
  }

  return fieldSchema
}

export function generateDateTimeFieldSchema(field: DateTimeField) {
  const { constraint, required } = field
  let fieldSchema = z.string()

  if (typeof constraint.min_value === 'string') {
    fieldSchema = fieldSchema.refine((v) => dayjs(v).isAfter(constraint.min_value), {
      message: 'todo datetime min value message',
    })
  }

  if (typeof constraint.max_value === 'string') {
    fieldSchema = fieldSchema.refine((v) => dayjs(v).isBefore(constraint.max_value), {
      message: 'todo datetime max value message',
    })
  }

  if (!required) {
    fieldSchema = fieldSchema.optional()
  } else {
    fieldSchema.refine((v) => dayjs(v).isValid(), {
      message: 'todo datetime valid message',
    })
  }

  return fieldSchema
}

export function generateTimeFieldSchema(field: TimeField) {
  const { constraint, required } = field
  let fieldSchema = z.string()

  if (typeof constraint.min_value === 'string') {
    fieldSchema = fieldSchema.refine((v) => dayjs(v, ['HH:mm:ss', 'HH:mm']).isAfter(dayjs(constraint.min_value, ['HH:mm:ss', 'HH:mm'])), {
      message: 'todo datetime min value message',
    })
  }

  if (typeof constraint.max_value === 'string') {
    fieldSchema = fieldSchema.refine((v) => dayjs(v, ['HH:mm:ss', 'HH:mm']).isBefore(dayjs(constraint.max_value, ['HH:mm:ss', 'HH:mm'])), {
      message: 'todo datetime max value message',
    })
  }

  if (!required) {
    fieldSchema = fieldSchema.optional()
  } else {
    fieldSchema.refine((v) => dayjs(v, ['HH:mm:ss', 'HH:mm']).isValid(), {
      message: 'todo datetime valid message',
    })
  }

  return fieldSchema
}

export function generateObjectSchemaFromFields(fields: Field[]) {
  const schemaEntries = fields.map((field) => {
    let schema: z.ZodType

    switch (field.type) {
      case FieldTypeEnum.Integer: {
        schema = generateIntegerFieldSchema(field)
        break
      }
      case FieldTypeEnum.String: {
        schema = generateStringFieldSchema(field)
        break
      }
      case FieldTypeEnum.Date: {
        schema = generateDateFieldSchema(field)
        break
      }
      case FieldTypeEnum.DateTime: {
        schema = generateDateTimeFieldSchema(field)
        break
      }
      case FieldTypeEnum.Time: {
        schema = generateTimeFieldSchema(field)
        break
      }
      default: throw new Error('Not implemented')
    }

    return [field.code, schema]
  })

  return z.object(Object.fromEntries(schemaEntries))
}
