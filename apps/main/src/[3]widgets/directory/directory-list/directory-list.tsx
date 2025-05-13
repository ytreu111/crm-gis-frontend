'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { AgGrid } from '@/shared/ui/ag-grid'
import { queryFetchDirectoryList } from '@/entities/directory'

export const DirectoryList = () => {
  const router = useRouter()

  const { data: directories = [], isLoading } = useQuery({
    queryKey: ['directoryList'],
    queryFn: queryFetchDirectoryList,
  })

  return (
    <div className="h-full w-full">
      <AgGrid
        loading={isLoading}
        onCellDoubleClicked={({ data }) => {
          if (data) {
            router.push(`/directory/${data.id}`)
          }
        }}
        rowData={directories}
        columnDefs={[
          {
            field: 'name',
            headerName: 'Наименование',
          },
          {
            field: 'description',
            headerName: 'Описание',
          },
        ]}
      />
    </div>
  )
}