'use client'

import { useBoolean } from 'usehooks-ts'
import { AgGrid } from '@/shared/ui/ag-grid'
import { useEffect, useState } from 'react'
import { AxiosClient } from '@/shared/lib/axios-client'
import { useRouter } from 'next/navigation'

export const DirectoryList = () => {
  const router = useRouter()
  const { value: loading, setTrue, setFalse } = useBoolean(true)

  const [data, setData] = useState<Array<{ id: number, name: string, description?: string }>>([])

  useEffect(() => {
    setTrue()
    AxiosClient.get('directories')
      .then(({ data }) => {
        console.log(data)
        setData(data)
        setFalse()
      })
      .catch(() => {
        // TODO ERROR
      })
  }, [setFalse, setTrue])

  return (
    <AgGrid
      onCellDoubleClicked={(event) => {
        if (event.data) {
          router.push(`/control/directory/${event.data.id}`)
        }
      }}
      rowData={data}
      loading={loading}
      columnDefs={[
        { field: 'name', headerName: 'Наименование' },
        { field: 'description', headerName: 'Описание' },
      ]}
    />
  )
}