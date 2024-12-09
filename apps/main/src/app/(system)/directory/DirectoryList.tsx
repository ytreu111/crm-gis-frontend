'use client'

import { AgGrid } from '@/shared/ui/ag-grid'
import { useEffect, useState } from 'react'
import { AxiosClient } from '@/shared/lib/axios-client'
import { useRouter } from 'next/navigation'

export const DirectoryList = () => {
  const router = useRouter()

  const [directories, setDirectories] = useState([])

  useEffect(() => {
    AxiosClient.get('/directories')
      .then(({ data }) => setDirectories(data))
  }, [])

  return (
    <div className="h-full w-full">
      <AgGrid
        onCellDoubleClicked={({ data }) => {
          router.push(`/directory/${data.id}`)
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