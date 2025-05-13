import type { NextComponent } from '@/shared/model/nextjs'
import { DirectoryEditPage } from '@/pages/directory/directory-edit-page'
import { getDirectoryElementById } from '@/actions/elements'
import { fetchFieldList } from '@/entities/field'

const DirectoryElementEditPage: NextComponent<{ directoryId: string, elementId: string }> = async (props) => {
  const { directoryId, elementId } = await props.params
  const { data: fields } = await fetchFieldList({ directoryId })
  const { data: elementData } = await getDirectoryElementById(elementId)

  return (
    <DirectoryEditPage
      fields={fields}
      data={elementData}
    />
  )
}

export default DirectoryElementEditPage