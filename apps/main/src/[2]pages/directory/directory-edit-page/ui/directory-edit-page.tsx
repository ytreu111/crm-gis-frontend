'use client'

import { DirectoryForm } from '@/widgets/directory/directory-form'
import { updateDirectoryElement } from '@/actions/elements'

export const DirectoryEditPage = ({ fields, data }) => {
  const onSubmit = async (formData) => {
    try {
      updateDirectoryElement(data.id, formData)
    } catch (e) {

    }
  }

  return (
    <DirectoryForm
      data={data}
      fields={fields}
      onSubmit={onSubmit}
    />
  )
}