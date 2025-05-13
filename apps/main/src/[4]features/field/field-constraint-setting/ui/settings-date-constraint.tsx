import { DatePicker } from '@workspace/ui-kit'
import { Controller } from 'react-hook-form'
import { Text } from '@/shared/ui/typography'

export const SettingsDateConstraint = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Text strong>Минимальная дата</Text>
        <Controller
          name="min_value"
          render={({ field, fieldState }) => {
            return (
              <div className="flex flex-col">
                <DatePicker
                  value={field.value}
                  onChange={(v) => field.onChange(v?.format('YYYY-MM-DD'))}
                  onBlur={field.onBlur}
                  placeholder="Минимальная дата"
                />
                {fieldState.error && <Text size={3} type="danger">{fieldState.error.message}</Text>}
              </div>
            )
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Text strong>Максимальная дата</Text>
        <Controller
          name="max_value"
          render={({ field, fieldState }) => {
            return (
              <div className="flex flex-col">
                <DatePicker
                  value={field.value}
                  onChange={(v) => field.onChange(v?.format('YYYY-MM-DD'))}
                  onBlur={field.onBlur}
                  placeholder="Максимальная дата"
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
                <DatePicker
                  value={field.value}
                  onChange={(v) => field.onChange(v?.format('YYYY-MM-DD'))}
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