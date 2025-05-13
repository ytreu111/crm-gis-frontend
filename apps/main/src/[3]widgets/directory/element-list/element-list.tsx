'use client'

import type { ColDef } from 'ag-grid-community'
import type { Field } from '@/entities/field'
import type { FC} from 'react';
import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { queryElementList } from '@/entities/element'
import { AgGrid } from '@/shared/ui/ag-grid'

export interface ElementListProps {
  directoryId: string
  fields: Field[]
}

export const ElementList: FC<ElementListProps> = ({ fields, directoryId }) => {
  const columnDefs = useMemo<Array<ColDef>>(() => {
    return fields.map((field) => ({
      headerName: field.name,
      field: field.code,
    }))
  }, [fields])

  const { data: elements } = useQuery({
    queryKey: ['elementList', { directoryId }],
    queryFn: (ctx) => queryElementList({ directoryId }, ctx),
  })

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <Link href={`/directory/${directoryId}/create`}>Создать</Link>
      </div>
      <AgGrid
        rowData={elements}
        columnDefs={columnDefs}
      />
    </div>
  )
}