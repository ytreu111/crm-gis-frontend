'use client'

import type { Field } from '@/entities/field'
import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import { DirectoryForm } from '@/widgets/directory/directory-form'
import { createDirectoryElement } from '@/actions/elements'

export interface DirectoryCreatePageProps {
  directoryId: string
  fields: Field[]
}

export const DirectoryCreatePage: FC<DirectoryCreatePageProps> = ({ directoryId, fields }) => {
  const { replace } = useRouter()

  const onSubmit = async (formData) => {
    try {
      const { data } = await createDirectoryElement(directoryId, formData)
      const { id } = data
      replace(id)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <DirectoryForm
      fields={fields}
      onSubmit={onSubmit}
    />
  )
}