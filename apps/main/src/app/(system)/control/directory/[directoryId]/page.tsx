import { AxiosClient } from '@/shared/lib/axios-client'
import { EditDirectoryPage } from './EditDirectoryPage'

const DetailDirectoryPage = async props => {
  const params = await props.params;
  const { data } = await AxiosClient.get(`directories/${params.directoryId}`)

  return (
    <EditDirectoryPage
      directoryId={data.id}
      name={data.name}
      discription={data.description}
      data={data}
    />
  )
}

export default DetailDirectoryPage
