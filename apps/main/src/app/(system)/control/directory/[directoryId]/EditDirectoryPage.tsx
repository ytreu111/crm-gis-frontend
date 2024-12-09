'use client'

import { Input } from '@/shared/ui/input/input'
import { DirectoryField, DirectoryFieldTypeEnum, FieldList } from './FieldList'
import { useEffect, useState } from 'react'
import { AxiosClient } from '@/shared/lib/axios-client'

export const EditDirectoryPage = (
  {
    directoryId,
    name,
    description,
  },
) => {
  const [_name, setName] = useState(name)
  const [_description, setDescription] = useState(description)

  const [fields, setFields] = useState<Array<DirectoryField>>([])

  const onSave = () => {
    AxiosClient.put(
      `directories/${directoryId}`,
      { name: _name, description: _description, fields },
    )
      .then(({ data }) => {
        setName(data.name)
        setDescription(data.desription)
        setFields(data.fields)
      })
  }

  const onAdd = () => {
    setFields((prev) => [
      ...prev,
      {
        name: '',
        type: DirectoryFieldTypeEnum.String,
        multiple: false,
        required: false,
        show_in_list: true,
        order: (prev.length + 1) * 100,
      },
    ])
  }

  const onDelete = (field) => {
    setFields((prev) => prev.filter((el) => el !== field))
  }

  useEffect(() => {
    AxiosClient.get(`directories/${directoryId}/fields`)
      .then(({ data }) => {
        setFields(data)
      })
      .catch(() => {
        // TODO ERROR
      })
  }, [directoryId])


  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button onClick={onSave}>Сохранить</button>
          <button>Отмена</button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-2">
            <span>Наименование</span>
            <Input value={_name} onChange={setName} />
          </div>
          <div className="flex gap-2">
            <span>Описание</span>
            <Input value={_description} onChange={setDescription} />
          </div>
          <FieldList
            fields={fields}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  )
}