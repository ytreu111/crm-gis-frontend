import { z } from 'zod'
import {
  DateFieldConstraintSchema,
  DateTimeFieldConstraintSchema,
  IntegerFieldConstraintSchema,
  StringFieldConstraintSchema,
  TimeFieldConstraintSchema,
} from './constraint'

export enum FieldTypeEnum {
  Integer = 'integer',
  String = 'string',
  Date = 'date',
  DateTime = 'datetime',
  Time = 'time',
  Point = 'point',
  Linestring = 'linestring',
  Polygon = 'polygon'
}


const FieldSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  code: z.string().nonempty(),
  required: z.boolean(),
  order: z.number().int(),
  show_in_list: z.boolean().nullish(),
})


export const IntegerFieldSchema = FieldSchema.extend({
  type: z.literal(FieldTypeEnum.Integer),
  constraint: IntegerFieldConstraintSchema,
})

export const StringFieldSchema = FieldSchema.extend({
  type: z.literal(FieldTypeEnum.String),
  constraint: StringFieldConstraintSchema,
})


export const DateFieldSchema = FieldSchema.extend({
  type: z.literal(FieldTypeEnum.Date),
  constraint: DateFieldConstraintSchema,
})

export const DateTimeFieldSchema = FieldSchema.extend({
  type: z.literal(FieldTypeEnum.DateTime),
  constraint: DateTimeFieldConstraintSchema,
})

export const TimeFieldSchema = FieldSchema.extend({
  type: z.literal(FieldTypeEnum.Time),
  constraint: TimeFieldConstraintSchema,
})

export const FieldUnionSchema = z.union([
  IntegerFieldSchema,
  StringFieldSchema,
  DateFieldSchema,
  DateTimeFieldSchema,
  TimeFieldSchema,
])

const EmptyFieldSchema = FieldSchema.extend({
  id: FieldSchema.shape.id.nullish(),
  name: z.string(),
  code: z.string(),
})

export const EmptyIntegerFieldSchema = IntegerFieldSchema.extend(EmptyFieldSchema.shape)

export const EmptyStringFieldSchema = StringFieldSchema.extend(EmptyFieldSchema.shape)

export const EmptyDateFieldSchema = DateFieldSchema.extend(EmptyFieldSchema.shape)

export const EmptyDateTimeFieldSchema = DateTimeFieldSchema.extend(EmptyFieldSchema.shape)

export const EmptyTimeFieldSchema = TimeFieldSchema.extend(EmptyFieldSchema.shape)

export const EmptyFieldUnionSchema = z.union([
  EmptyIntegerFieldSchema,
  EmptyStringFieldSchema,
  EmptyDateFieldSchema,
  EmptyDateTimeFieldSchema,
  EmptyTimeFieldSchema,
])

export type IntegerField = z.infer<typeof IntegerFieldSchema>
export type StringField = z.infer<typeof StringFieldSchema>
export type DateField = z.infer<typeof DateFieldSchema>
export type DateTimeField = z.infer<typeof DateTimeFieldSchema>
export type TimeField = z.infer<typeof TimeFieldSchema>

// export type Field = IntegerField | StringField | DateField | DateTimeField | TimeField
export type Field = z.infer<typeof FieldUnionSchema>
export type EmptyField = z.infer<typeof EmptyFieldUnionSchema>
