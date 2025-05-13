'use client'

import type { EmptyField } from '@/entities/field'
import type { FC } from 'react'
import type { CreateDirectory } from '@/entities/directory'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input, Button, TextArea } from '@workspace/ui-kit'
import { Text } from '@/shared/ui/typography'
import { FieldConstraintSetting } from '@/features/field/field-constraint-setting'
import { EmptyFieldUnionSchema, FieldTypeEnum } from '@/entities/field'
import { EditFieldList } from '@/features/field/edit-field-list'

export interface EditDirectoryFormProps {
  name?: string | null
  description?: string | null
  fields?: EmptyField[]
  onSave: (data: CreateDirectory) => void
}

export const EditDirectoryForm: FC<EditDirectoryFormProps> = (
  {
    name: _name,
    description: _description,
    fields: _fields = [],
    onSave,
  }) => {
  const router = useRouter()

  const [name, setName] = useState(_name)
  const [description, setDescription] = useState(_description)
  const [fields, setFields] = useState<EmptyField[]>(_fields)
  const [constraintEditIndex, setConstraintEditIndex] = useState<number | null>(null)

  const onAddField = () => {
    setFields((prev) => [
      ...prev,
      EmptyFieldUnionSchema.parse({
        name: '',
        code: '',
        type: FieldTypeEnum.String,
        required: false,
        show_in_list: true,
        order: (prev.length + 1) * 100,
        constraint: {},
      }),
    ])
  }

  const onRemoveField = (index: number) => {
    setFields((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ])
  }

  const onEndEditField = (index: number, data: EmptyField) => {
    setFields((prev) => {
      const prevFieldValue = prev[index]

      if (!prevFieldValue) return prev

      const newFieldValue = { ...data }

      if (prevFieldValue.type !== newFieldValue.type) {
        console.log(1111)
        newFieldValue.constraint = {}
      }

      return [
        ...prev.slice(0, index),
        newFieldValue,
        ...prev.slice(index + 1),
      ]
    })
  }

  const onEditFieldConstraint = (newConstraint: EmptyField['constraint']) => {
    if (typeof constraintEditIndex === 'number') {
      setFields((prev) => {
        return [
          ...prev.slice(0, constraintEditIndex),
          {
            ...prev[constraintEditIndex],
            constraint: newConstraint,
          },
          ...prev.slice(constraintEditIndex + 1),
        ]
      })
    }

    setConstraintEditIndex(null)
  }

  return (
    <>
      <div className="w-full h-full flex flex-col gap-2">
        <div className="flex gap-1">
          <Button
            variant="solid"
            onClick={() => {
              onSave({
                name,
                description,
                fields,
              })
            }}
          >
            Сохранить
          </Button>
          <Button
            variant="solid"
            onClick={() => router.replace('/control/directory/')}>Отменить</Button>
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Text strong>Наименование</Text>
            <Input placeholder="Наименование справочника" value={name} onChange={setName} className="w-[400px]!" />
          </div>
          <div className="flex flex-col gap-1">
            <Text strong>Описание</Text>
            <TextArea placeholder="Описание справочника" value={description} onChange={setDescription} />
          </div>
          <div className="flex flex-col gap-1 h-full">
            <div>
              <Button onClick={onAddField}>Добавить поле</Button>
            </div>
            <EditFieldList
              fields={fields}
              onRemoveField={onRemoveField}
              onEditConstraint={setConstraintEditIndex}
              onEndEditField={onEndEditField}
            />
          </div>
        </div>
      </div>
      <FieldConstraintSetting
        field={fields[constraintEditIndex as number]}
        onCancel={() => setConstraintEditIndex(null)}
        onSave={onEditFieldConstraint}
      />
    </>
  )
}
