import { DirectoryList } from './DirectoryList'
import { Button } from '@/shared/ui/button'

const DirectoriesControlPage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex">
        <Button>Создать</Button>
        <Button>Удалить</Button>
      </div>
      <DirectoryList />
    </div>
  )
}

export default DirectoriesControlPage