import type { FieldConstraint } from '@/entities/field'

export type TypedFieldFormInputProps<Constraint extends FieldConstraint> = {
  value?: any,
  error?: boolean
  onChange: (value: any) => void
  constraint: Constraint
}