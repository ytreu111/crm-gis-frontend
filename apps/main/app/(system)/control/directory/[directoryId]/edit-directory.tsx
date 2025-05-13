'use client'

import type { FC } from 'react'
import type { CreateDirectory, Directory } from '@/entities/directory';
import type { Field } from '@/entities/field'
import { CreateDirectorySchema , updateDirectoryById } from '@/entities/directory'
import { EditDirectoryForm } from '@/widgets/control-directory/edit-directory-form'

export interface EditDirectoryProps {
  directory: Directory
  fields: Field[]
}

export const EditDirectory: FC<EditDirectoryProps> = ({ directory, fields }) => {
  const onSave = async (directoryData: CreateDirectory) => {
    await updateDirectoryById({ directoryId: directory.id, body: CreateDirectorySchema.parse(directoryData) })
  }

  return (
    <EditDirectoryForm
      name={directory.name}
      description={directory.description}
      fields={fields}
      onSave={onSave}
    />
  )
}