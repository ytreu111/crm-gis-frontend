import type { NextComponent } from '@/shared/model/nextjs'
import { fetchFieldList } from '@/entities/field'
import { ElementList } from '@/widgets/directory/element-list'

const DetailDirectoryPage: NextComponent<{ directoryId: string }> = async (props) => {
  const { directoryId } = await props.params

  const { data: fields } = await fetchFieldList({ directoryId })

  return (
    <ElementList fields={fields} directoryId={directoryId} />
  )
}

export default DetailDirectoryPage