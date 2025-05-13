'use client'

import type { ZodType } from 'zod'
import type { FC } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useMemo } from 'react'
import { z } from 'zod'
import { Button } from '@workspace/ui-kit'
import { Field } from '@/features/directory/field'
import { generateObjectSchemaFromFields } from '@/entities/field'
import { FieldFormInput } from '@/features/field/field-form-input'

const FieldArray = ({ field }) => {
  const { fields, insert, remove } = useFieldArray({ name: field.code })

  useEffect(() => {
    if (!fields.length) {
      insert(0, undefined)
    }
  }, [])

  return (
    <div className="flex flex-col gap-2">
      {fields.map(({ id }, index, arr) => {
        return (
          <div key={id} className="flex gap-2">
            {arr.length > 1 && (
              <Button onClick={() => remove(index)}>Удалить</Button>
            )}
            <Field field={{ ...field, code: `${field.code}.${index}` }} />
          </div>
        )
      })}
      <div>
        <Button onClick={() => insert(fields.length, undefined)}>Добавить</Button>
      </div>
    </div>
  )
}

export interface DirectoryFormProps {
}

export const DirectoryForm: FC<DirectoryFormProps> = ({ onSubmit, fields, data }) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      ...Object.fromEntries(fields.map((field) => [field.code, field.constraint.default_value])),
      ...data,
    },
    resolver: zodResolver(generateObjectSchemaFromFields(fields)),
  })

  return (
    <div className="bg-bg h-full rounded-md p-2">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Button htmlType="submit">Сохранить</Button>
              <Button>Отменить</Button>
            </div>
            <div className="flex flex-col gap-2">
              {fields.map((field) => (
                <FieldFormInput field={field} key={field.id} />
                // <div className="flex flex-col" key={field.id}>
                // <span>{field.name}</span>
                // {
                // field.multiple
                //   ? <FieldArray field={field} />
                //   : <Field field={field} />
                // }
                // </div>
              ))}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
