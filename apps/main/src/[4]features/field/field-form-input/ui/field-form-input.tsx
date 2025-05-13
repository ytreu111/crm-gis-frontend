import type { ControllerProps } from 'react-hook-form'
import type { FC } from 'react'
import type { Field } from '@/entities/field'
import { Controller } from 'react-hook-form'
import { Text } from '@/shared/ui/typography'
import { fieldInputResolver } from '../lib/fieldInputResolver'

export interface FieldFormInputProps {
  field: Field
}

export const FieldFormInput: FC<FieldFormInputProps> = ({ field }) => {
  const Render = fieldInputResolver(field)
  //
  // const render: ControllerProps['render'] = useCallback(({ field: fieldProps, fieldState, formState }) => {
  //   const error = fieldState.error || formState.errors[field.code]
  //
  //   const props = {
  //     ...fieldProps,
  //     error,
  //   }
  //
  //   if (typeof Render === 'function' || (typeof Render === 'object' && 'render' in Render)) {
  //     const RenderInput = Render
  //
  //     return (
  //       <RenderInput {...props} />
  //     )
  //   }
  //
  //   return cloneElement(Render, props)
  // }, [Render, field.code])
  //
  // if (!Render) return null

  const render: ControllerProps['render'] = ({ field: fieldProps, fieldState, formState }) => {
    const error = fieldState.error

    return (
      <div className="flex flex-col gap-1">
        <Text size={2}>{field.name}</Text>
        <Render
          {...fieldProps}
          error={!!error}
          constraint={field.constraint as any}
        />
        {error && (
          <Text type="danger">{error.message}</Text>
        )}
      </div>
    )
  }

  return (
    <Controller
      name={field.code}
      render={render}
    />
  )
}