'use client'

import { AgGrid } from '@/shared/ui/ag-grid'
import { useEffect, useMemo, useState } from 'react'
import { AxiosClient } from '@/shared/lib/axios-client'
import { ColDef } from 'ag-grid-community'
import Link from 'next/link'

export const DirectoryElementsList = ({ directoryId }) => {
  const [data, setData] = useState([])
  const [fields, setFields] = useState([])

  const columnDefs = useMemo<Array<ColDef>>(() => {
    return fields.map((field) => ({
      headerName: field.name,
      field: field.code,
    }))
  }, [fields])

  useEffect(() => {
    AxiosClient.get(`/directories/${directoryId}/elements`)
      .then(({ data }) => {
        setData(data)
      })

    AxiosClient.get(`/directories/${directoryId}/fields`)
      .then(({ data }) => {
        setFields(data)
      })
  }, [directoryId])

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <Link href={`/directory/${directoryId}/create`}>Создать</Link>
      </div>
      <AgGrid
        rowData={data}
        columnDefs={columnDefs}
      />
    </div>
  )
}