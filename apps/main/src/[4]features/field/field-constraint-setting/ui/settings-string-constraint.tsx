'use client'

import type { StringFieldConstraint } from '@/entities/field'
import { Input, InputNumber } from '@workspace/ui-kit'
import { Controller, useFormContext } from 'react-hook-form'
import { Text } from '@/shared/ui/typography'

export const SettingsStringConstraint = () => {
  const { getValues } = useFormContext<StringFieldConstraint>()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Text strong>Минимальная длина</Text>
        <Controller
          name="min_length"
          render={({ field, fieldState }) => {
            return (
              <div className="flex flex-col">
                <InputNumber
                  max={getValues('max_length')}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  precision={0}
                  placeholder="Максимальная длина"
                />
                {fieldState.error && <Text size={3} type="danger">{fieldState.error.message}</Text>}
              </div>
            )
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Text strong>Максимальная длина</Text>
        <Controller
          name="max_length"
          render={({ field, fieldState }) => {
            return (
              <div className="flex flex-col">
                <InputNumber
                  min={getValues('min_length')}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  precision={0}
                  placeholder="Максимальная длина"
                />
                {fieldState.error && <Text size={3} type="danger">{fieldState.error.message}</Text>}
              </div>
            )
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Text strong>Значение по умолчанию</Text>
        <Controller
          name="default_value"
          render={({ field, fieldState }) => {
            return (
              <div className="flex flex-col">
                <Input
                  minLength={getValues('min_length')}
                  maxLength={getValues('max_length')}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  placeholder="Значение по умолчанию"
                />
                {fieldState.error && <Text size={3} type="danger">{fieldState.error.message}</Text>}
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}