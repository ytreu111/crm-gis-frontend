'use client'

import { AgGrid } from '@/shared/ui/ag-grid'
import { Button } from '@/shared/ui/button'
import { Select } from 'antd'

export enum DirectoryFieldTypeEnum {
  Integer = 'integer',
  Float = 'float',
  String = 'string',
  Date = 'date',
  DateTime = 'datetime',
  Time = 'time',
}

export interface DirectoryField {
  name: string;
  type: DirectoryFieldTypeEnum;
  required: boolean;
  multiple: boolean;
  order: number;
  show_in_list: boolean;
}

const directoryFieldTypeOptions = [
  { label: 'Число', value: DirectoryFieldTypeEnum.Integer },
  { label: 'Число с плавающей точкой', value: DirectoryFieldTypeEnum.Float },
  { label: 'Строка', value: DirectoryFieldTypeEnum.String },
  { label: 'Дата', value: DirectoryFieldTypeEnum.Date },
  { label: 'Дата со временем', value: DirectoryFieldTypeEnum.DateTime },
  { label: 'Время', value: DirectoryFieldTypeEnum.Time },
]

export const FieldList = (
  {
    fields,
    onAdd,
    onDelete,
  },
) => {
  console.log(fields)

  return (
    <div className="flex flex-col">
      <div>
        <Button
          onClick={onAdd}
        >
          Добавить поле
        </Button>
      </div>
      <AgGrid
        defaultColDef={{
          filter: false,
          editable: true,
          sortable: false,
        }}
        style={{ height: '500px' }}
        columnDefs={[
          {
            field: 'name',
            headerName: 'Наименование',
          },
          {
            minWidth: 250,
            field: 'type',
            headerName: 'Тип',
            valueFormatter: ({ value }) => {
              if (value) {
                return directoryFieldTypeOptions.find((el) => el.value === value)?.label ?? ''
              }

              return ''
            },
            cellEditor: (props) => {
              console.log(props)
              return (
                <Select
                  onChange={(v) => {
                    props.onValueChange(v)
                    props.stopEditing()
                  }}
                  value={props.value}
                  options={directoryFieldTypeOptions}
                  open
                  style={{ width: '100%', height: '100%' }}
                />
              )
            },
          },
          {
            field: 'required',
            headerName: 'Обязательность',
          },
          {
            field: 'multiple',
            headerName: 'Множественное',
          },
          {
            field: 'order',
            sort: 'asc',
            headerName: 'Сортировка',
            cellDataType: 'number',
            sortable: true,
            initialSort: 'asc',
          },
          {
            field: 'code',
            headerName: 'Код',
          },
          {
            editable: false,
            filter: false,
            resizable: false,
            pinned: 'right',
            suppressMovable: true,
            cellRenderer: (e) => {
              return (
                <div className="flex gap-1">
                  <Button>редактировать</Button>
                  <Button
                    onClick={() => {
                      onDelete(e.data)
                    }}
                  >
                    удалить
                  </Button>
                </div>
              )
            },
          },
        ]}
        singleClickEdit
        rowData={fields}
      />
      {/*<Modal open={!loading} />*/}
    </div>
  )
}