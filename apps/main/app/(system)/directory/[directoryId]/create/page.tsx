import type { NextComponent } from '@/shared/model/nextjs'
import { DirectoryCreatePage } from '@/pages/directory/directory-create-page'
import { fetchFieldList } from '@/entities/field'

const CreateDirectoryElementPage: NextComponent<{ directoryId: string }> = async (props) => {
  const { directoryId } = await props.params
  const { data: fields } = await fetchFieldList({ directoryId })

  return (
    <DirectoryCreatePage directoryId={directoryId} fields={fields} />
  )
}

export default CreateDirectoryElementPage
