import type { FC } from 'react'
import type { TypedFieldFormInputProps } from '../model/types'
import type { StringFieldConstraint } from '@/entities/field'
import { Input } from '@workspace/ui-kit'

export const StringFieldFormInput: FC<TypedFieldFormInputProps<StringFieldConstraint>> = (
  {
    constraint,
    ...props
  },
) => {
  return (
    <Input
      {...props}
      minLength={constraint.min_length}
      maxLength={constraint.max_length}
    />
  )
}