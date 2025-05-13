'use client'

import type { AgGridReact } from 'ag-grid-react'
import type { Directory } from '@/entities/directory'
import type { CellDoubleClickedEvent, SelectionChangedEvent } from 'ag-grid-community'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@workspace/ui-kit'
import { useQuery } from '@tanstack/react-query'
import { DeleteIcon, EditIcon, PlusIcon } from '@workspace/icons'
import { deleteDirectoryById, queryFetchDirectoryList } from '@/entities/directory'
import { AgGrid } from '@/shared/ui/ag-grid'

export const ControlDirectoryList = () => {
  const gridRef = useRef<AgGridReact>(null)

  const router = useRouter()

  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const { data = [], isFetching, refetch } = useQuery({
    queryKey: ['directoryList'],
    queryFn: queryFetchDirectoryList,
  })

  const onCellDoubleClicked = (e: CellDoubleClickedEvent<Directory>) => {
    if (e.data) {
      router.push(`/control/directory/${e.data.id}`)
    }
  }

  const onSelectionChanged = (e: SelectionChangedEvent<Directory>) => {
    setSelectedItem(e.api.getSelectedRows().at(0)?.id ?? null)
  }


  const onDelete = () => {
    if (selectedItem) {
      deleteDirectoryById({ directoryId: selectedItem })
        .then(() => {
          refetch()
          setSelectedItem(null)
        })
    }
  }

  return (
    <div className="flex flex-col h-full w-full gap-1">
      <div className="flex gap-1.25">
        <Link href="/control/directory/create">
          <Button color="additional" icon={<PlusIcon />} />
        </Link>
        <Link href={`/control/directory/${selectedItem}`} className={!selectedItem ? 'pointer-events-none' : ''}>
          <Button color="additional" icon={<EditIcon />} disabled={!selectedItem} />
        </Link>
        <Button color="additional" icon={<DeleteIcon />} onClick={onDelete} disabled={!selectedItem} />
      </div>
      <AgGrid
        ref={gridRef}
        onCellDoubleClicked={onCellDoubleClicked}
        onSelectionChanged={onSelectionChanged}
        rowSelection={{
          mode: 'singleRow',
          enableClickSelection: true,
        }}
        rowData={data}
        loading={isFetching}
        columnDefs={[
          { field: 'name', headerName: 'Наименование' },
          { field: 'description', headerName: 'Описание' },
        ]}
      />
    </div>
  )
}