'use client'

import { Controller, ControllerProps } from 'react-hook-form'
import { fieldInputResolver } from '../lib/fieldInputResolver'
import { cloneElement, useCallback } from 'react'

export const Field = ({ field }) => {
  const Render = fieldInputResolver(field.type)

  const render: ControllerProps['render'] = useCallback(({ field: fieldProps, fieldState, formState }) => {
    const error = fieldState.error || formState.errors[field.code]

    const props = {
      ...fieldProps,
      error,
    }

    if (typeof Render === 'function' || (typeof Render === 'object' && 'render' in Render)) {
      const RenderInput = Render

      return (
        <RenderInput {...props} />
      )
    }

    return cloneElement(Render, props)
  }, [Render, field.code])

  if (!Render) return null

  return (
    <Controller
      name={field.code}
      render={render}
    />
  )
}
