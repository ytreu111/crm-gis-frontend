'use client'

import type { CreateDirectory} from '@/entities/directory';
import { useRouter } from 'next/navigation'
import { CreateDirectorySchema , createDirectory } from '@/entities/directory'
import { EditDirectoryForm } from '@/widgets/control-directory/edit-directory-form'

const CreateDirectoryPage = () => {
  const router = useRouter()

  const onSave = async (directoryData: CreateDirectory) => {
    const { data } = await createDirectory({ body: CreateDirectorySchema.parse(directoryData) })

    router.push(data.id)
  }

  return (
    <EditDirectoryForm onSave={onSave} />
  )
}

export default CreateDirectoryPage
