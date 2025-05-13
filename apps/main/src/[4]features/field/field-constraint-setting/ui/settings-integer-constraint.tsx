'use client'

import type { IntegerFieldConstraint } from '@/entities/field'
import { InputNumber } from '@workspace/ui-kit'
import { Controller, useFormContext } from 'react-hook-form'
import { Text } from '@/shared/ui/typography'

export const SettingsIntegerConstraint = () => {
  const { getValues } = useFormContext<IntegerFieldConstraint>()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Text strong>Минимальное значение</Text>
        <Controller
          name="min_value"
          render={({ field, fieldState }) => {
            return (
              <div className="flex flex-col">
                <InputNumber
                  max={getValues('max_value')}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  precision={0}
                  placeholder="Минимальное значение"
                />
                {fieldState.error && <Text size={3} type="danger">{fieldState.error.message}</Text>}
              </div>
            )
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Text strong>Максимальное значение</Text>
        <Controller
          name="max_value"
          render={({ field, fieldState }) => {
            return (
              <div className="flex flex-col">
                <InputNumber
                  min={getValues('min_value')}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  precision={0}
                  placeholder="Максимальное значение"
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
                <InputNumber
                  // min={getValues('min_value')}
                  // max={getValues('max_value')}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  precision={0}
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