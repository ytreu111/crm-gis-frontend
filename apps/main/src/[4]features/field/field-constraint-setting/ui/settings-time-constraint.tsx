import { TimePicker } from '@workspace/ui-kit'
import { Controller } from 'react-hook-form'
import { Text } from '@/shared/ui/typography'

export const SettingsTimeConstraint = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Text strong>Минимальное значение</Text>
        <Controller
          name="min_value"
          render={({ field, fieldState }) => {
            return (
              <div className="flex flex-col">
                <TimePicker
                  value={field.value}
                  viewFormat="HH:mm:ss"
                  onChange={(v) => field.onChange(v?.format('HH:mm:ss'))}
                  onBlur={field.onBlur}
                  placeholder="Минимальное время"
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
                <TimePicker
                  value={field.value}
                  viewFormat="HH:mm:ss"
                  onChange={(v) => field.onChange(v?.format('HH:mm:ss'))}
                  onBlur={field.onBlur}
                  placeholder="Минимальное время"
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
                <TimePicker
                  value={field.value}
                  viewFormat="HH:mm:ss"
                  onChange={(v) => field.onChange(v?.format('HH:mm:ss'))}
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