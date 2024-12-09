import { DirectoryElementsList } from './DirectoryElementsList'

const DetailDirectoryPage = async props => {
  const params = await props.params;
  const { directoryId } = params

  return (
    <DirectoryElementsList directoryId={directoryId} />
  )
}

export default DetailDirectoryPage