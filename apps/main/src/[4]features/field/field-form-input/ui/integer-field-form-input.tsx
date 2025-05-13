import type { FC } from 'react'
import type { TypedFieldFormInputProps } from '../model/types'
import type { IntegerFieldConstraint } from '@/entities/field'
import { InputNumber } from '@workspace/ui-kit'

export const IntegerFieldFormInput: FC<TypedFieldFormInputProps<IntegerFieldConstraint>> = (
  {
    constraint,
    ...props
  },
) => {
  return (
    <InputNumber
      {...props}
      min={constraint.min_value}
      max={constraint.max_value}
    />
  )
}