import type { NextComponent } from '@/shared/model/nextjs'
import { fetchFieldList } from '@/entities/field'
import { fetchDirectoryById } from '@/entities/directory'
import { EditDirectory } from './edit-directory'

const DetailDirectoryPage: NextComponent<{ directoryId: string }> = async ({ params }) => {
  const { directoryId } = await params

  const { data: directory } = await fetchDirectoryById({ directoryId })
  const { data: fields } = await fetchFieldList({ directoryId })

  return (
    <EditDirectory directory={directory} fields={fields} />
  )
}

export default DetailDirectoryPage
