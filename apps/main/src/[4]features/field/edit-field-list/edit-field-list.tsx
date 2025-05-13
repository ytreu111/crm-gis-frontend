import type { FC } from 'react'
import type { EmptyField } from '@/entities/field'
import { Button } from '@workspace/ui-kit'
import { DeleteIcon, EditIcon } from '@workspace/icons'
import { Select } from 'antd'
import * as lodash from 'lodash-es'
import { AgGrid } from '@/shared/ui/ag-grid'
import { FieldTypeEnum, FieldTypeTranslateEnum } from '@/entities/field'

const directoryFieldTypeOptions: Array<{ value: FieldTypeEnum, label: string }> = [
  { value: FieldTypeEnum.Integer, label: FieldTypeTranslateEnum[FieldTypeEnum.Integer] },
  { value: FieldTypeEnum.String, label: FieldTypeTranslateEnum[FieldTypeEnum.String] },
  { value: FieldTypeEnum.Date, label: FieldTypeTranslateEnum[FieldTypeEnum.Date] },
  { value: FieldTypeEnum.DateTime, label: FieldTypeTranslateEnum[FieldTypeEnum.DateTime] },
  { value: FieldTypeEnum.Time, label: FieldTypeTranslateEnum[FieldTypeEnum.Time] },
]

export interface EditFieldListProps {
  fields: EmptyField[]
  onRemoveField: (index: number) => void
  onEditConstraint: (index: number) => void
  onEndEditField: (index: number, data: EmptyField) => void
}

export const EditFieldList: FC<EditFieldListProps> = (
  {
    fields,
    onRemoveField,
    onEditConstraint,
    onEndEditField,
  }) => {
  return (
    <AgGrid
      rowData={lodash.cloneDeep(fields)}
      singleClickEdit
      defaultColDef={{
        filter: false,
        editable: true,
        sortable: false,
        suppressMovable: true,
      }}
      onCellEditingStopped={(v) => {
        onEndEditField(v.node.rowIndex!, v.data!)
      }}
      onSortChanged={() => {
        console.log(123)
      }}
      columnDefs={[
        {
          editable: false,
          filter: false,
          resizable: false,
          suppressMovable: true,
          width: 118,
          pinned: 'left',
          cellRenderer: (e) => {
            return (
              <div className="flex gap-1 w-fit">
                <Button
                  color={'additional'}
                  icon={<EditIcon />}
                  onClick={() => onEditConstraint(e.node.rowIndex)}
                />
                <Button
                  color={'additional'}
                  icon={<DeleteIcon />}
                  onClick={() => onRemoveField(e.node.rowIndex)}
                />
              </div>
            )
          },
        },
        {
          field: 'code',
          headerName: 'Код',
        },
        {
          field: 'name',
          headerName: 'Наименование',
        },
        {
          minWidth: 250,
          field: 'type',
          headerName: 'Тип',
          valueFormatter: ({ data }) => {
            return FieldTypeTranslateEnum[data!.type]
          },
          cellEditor: (props) => {
            return (
              <Select
                open
                className="w-full"
                options={directoryFieldTypeOptions}
                value={props.value}
                onChange={(v) => {
                  props.onValueChange(v)
                  props.stopEditing()
                }}
              />
            )
          },
        },
        {
          field: 'required',
          headerName: 'Обязательность',
        },
        // {
        //   field: 'multiple',
        //   headerName: 'Множественное',
        // },
        {
          field: 'order',
          sort: 'asc',
          sortingOrder: ['asc', 'desc'],
          headerName: 'Сортировка',
          cellDataType: 'number',
          sortable: true,
          initialSort: 'asc',
        },
      ]}
    />
  )
}