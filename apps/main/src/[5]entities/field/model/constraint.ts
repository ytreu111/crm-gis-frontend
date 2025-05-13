import { z } from 'zod'
import dayjs from 'dayjs'

function addDateRefine<T extends z.ZodTypeAny>(schema: T): z.ZodEffects<z.ZodEffects<T>> {
  return schema
    // min_value
    .superRefine(({ min_value, max_value }, ctx) => {
      if (typeof min_value === 'string' && typeof max_value === 'string') {
        const minValue = dayjs(min_value)
        const maxValue = dayjs(max_value)

        if (minValue.isAfter(maxValue)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['min_value'],
            message: 'Минимальная дата не может быть после Максимальной даты',
          })
        }
      }
    })
    // default_value
    .superRefine(({ min_value, max_value, default_value }, ctx) => {
      if (typeof default_value === 'string' && (typeof min_value === 'string' || typeof max_value === 'string')) {
        const defaultValue = dayjs(default_value)

        if (typeof min_value === 'string') {
          const minValue = dayjs(min_value)

          if (defaultValue.isBefore(minValue)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['default_value'],
              message: 'Значение по умолчанию не может быть до Минимальной даты',
            })
          }
        }

        if (typeof max_value === 'string') {
          const maxValue = dayjs(max_value)

          if (defaultValue.isAfter(maxValue)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['default_value'],
              message: 'Значение по умолчанию не может быть после Максимальной даты',
            })
          }
        }
      }
    })
}

export const IntegerFieldConstraintSchema = z
  .object({
    min_value: z.number().nullish(),
    max_value: z.number().nullish(),
    default_value: z.number().nullish(),
  })
  // min_value
  .superRefine(({ min_value, max_value }, ctx) => {
    if (typeof min_value === 'number' && typeof max_value === 'number' && min_value > max_value) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['min_value'],
        message: 'Минимальное значение не может быть больше Максимального значения',
      })
    }
  })
  // default_value
  .superRefine(({ min_value, max_value, default_value }, ctx) => {
    if (typeof default_value === 'number' && (typeof min_value === 'number' || typeof max_value === 'number')) {
      if (typeof min_value === 'number' && default_value < min_value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['default_value'],
          message: 'Значение по умолчанию не может быть меньше Минимального значения',
        })
      }

      if (typeof max_value === 'number' && default_value > max_value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['default_value'],
          message: 'Значение по умолчанию не может быть больше Максимального значения',
        })
      }
    }
  })

export const StringFieldConstraintSchema = z
  .object({
    min_length: z.number().nullish(),
    max_length: z.number().nullish(),
    default_value: z.string().nullish(),
  })
  // min_length
  .superRefine(({ min_length, max_length }, ctx) => {
    if (typeof min_length === 'number' && typeof max_length === 'number' && min_length > max_length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['min_length'],
        message: 'Минимальная длина не может быть больше Максимальной длины',
      })
    }
  })
  // default_value
  .superRefine(({ min_length, max_length, default_value }, ctx) => {
    if (typeof default_value === 'string' && (typeof min_length === 'number' || typeof max_length === 'number')) {
      if (typeof min_length === 'number' && default_value.length < min_length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['default_value'],
          message: 'Значение по умолчанию не может быть длиной меньше Минимальной длины',
        })
      }

      if (typeof max_length === 'number' && default_value.length > max_length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['default_value'],
          message: 'Значение по умолчанию не может быть длиной больше Максимальной длины',
        })
      }
    }
  })

export const DateFieldConstraintSchema = addDateRefine(
  z.object({
    min_value: z.string().date().nullish(),
    max_value: z.string().date().nullish(),
    default_value: z.string().date().nullish(),
  }),
)

export const DateTimeFieldConstraintSchema = addDateRefine(
  z.object({
    min_value: z.string().datetime().nullish(),
    max_value: z.string().datetime().nullish(),
    default_value: z.string().datetime().nullish(),
  }),
)


export const TimeFieldConstraintSchema = z.object({
  min_value: z.string().time().nullish(),
  max_value: z.string().time().nullish(),
  default_value: z.string().time().nullish(),
})
  // min_value
  .superRefine(({ min_value, max_value }, ctx) => {
    if (typeof min_value === 'string' && typeof max_value === 'string') {
      const minValue = dayjs(min_value, ['HH:mm:ss', 'HH:mm'])
      const maxValue = dayjs(max_value, ['HH:mm:ss', 'HH:mm'])

      if (minValue.isAfter(maxValue)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['min_value'],
          message: 'Минимальное время не может быть после Максимального времени',
        })
      }
    }
  })
  // default_value
  .superRefine(({ min_value, max_value, default_value }, ctx) => {
    if (typeof default_value === 'string' && (typeof min_value === 'string' || typeof max_value === 'string')) {
      const defaultValue = dayjs(default_value, ['HH:mm:ss', 'HH:mm'])

      if (typeof min_value === 'string') {
        const minValue = dayjs(min_value, ['HH:mm:ss', 'HH:mm'])

        if (defaultValue.isBefore(minValue)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['default_value'],
            message: 'Значение по умолчанию не может быть до Минимального времени',
          })
        }
      }

      if (typeof max_value === 'string') {
        const maxValue = dayjs(max_value, ['HH:mm:ss', 'HH:mm'])

        if (defaultValue.isAfter(maxValue)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['default_value'],
            message: 'Значение по умолчанию не может быть после Максимального времени',
          })
        }
      }
    }
  })

export const FieldConstraintUnionSchema = z.union([
  IntegerFieldConstraintSchema,
  StringFieldConstraintSchema,
  DateFieldConstraintSchema,
  DateTimeFieldConstraintSchema,
  TimeFieldConstraintSchema,
])

export type IntegerFieldConstraint = z.infer<typeof IntegerFieldConstraintSchema>
export type StringFieldConstraint = z.infer<typeof StringFieldConstraintSchema>
export type DateFieldConstraint = z.infer<typeof DateFieldConstraintSchema>
export type DateTimeFieldConstraint = z.infer<typeof DateTimeFieldConstraintSchema>
export type TimeFieldConstraint = z.infer<typeof TimeFieldConstraintSchema>

export type FieldConstraint = z.infer<typeof FieldConstraintUnionSchema>
