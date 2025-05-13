'use client'

import type { EmptyField } from '@/entities/field'
import type { FC } from 'react'
import { useEffect } from 'react'
import { Modal } from '@workspace/ui-kit'
import { EditIcon } from '@workspace/icons'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { fieldConstraintSchemaByType, FieldTypeEnum } from '@/entities/field'
import { SettingsIntegerConstraint } from './settings-integer-constraint'
import { SettingsStringConstraint } from './settings-string-constraint'
import { SettingsDateConstraint } from './settings-date-constraint'
import { SettingsDateTimeConstraint } from './settings-date-time-constraint'
import { SettingsTimeConstraint } from './settings-time-constraint'

export interface FieldSettingConstraintProps {
  field?: EmptyField
  onCancel: () => void
  onSave: (v: EmptyField['constraint']) => void
}

export const FieldConstraintSetting: FC<FieldSettingConstraintProps> = (
  {
    field,
    onCancel,
    onSave,
  },
) => {
  const methods = useForm({
    mode: 'all',
    resolver: field ? zodResolver(fieldConstraintSchemaByType[field.type]) : undefined,
    shouldUseNativeValidation: false,
    resetOptions: {
      keepDirty: true,
    },
  })

  useEffect(() => {
    if (field) {
      Object.entries(field.constraint).forEach(([key, value]) => { methods.setValue(key, value) })
    }

    return () => {
      methods.reset()
    }
  }, [field, methods])

  return (
    <Modal
      open={!!field}
      title={`Дополнительная настройка поля`}
      icon={<EditIcon />}
      onCancel={onCancel}
      destroyOnClose
      onOk={methods.handleSubmit(onSave)}
    >
      <FormProvider {...methods}>
        {field && (
          <>
            {field.type === FieldTypeEnum.Integer && (
              <SettingsIntegerConstraint />
            )}
            {field.type === FieldTypeEnum.String && (
              <SettingsStringConstraint />
            )}
            {field.type === FieldTypeEnum.Date && (
              <SettingsDateConstraint />
            )}
            {field.type === FieldTypeEnum.DateTime && (
              <SettingsDateTimeConstraint />
            )}
            {field.type === FieldTypeEnum.Time && (
              <SettingsTimeConstraint />
            )}
          </>
        )}
      </FormProvider>
    </Modal>
  )
}