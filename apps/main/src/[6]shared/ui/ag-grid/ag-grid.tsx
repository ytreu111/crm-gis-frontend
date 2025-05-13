'use client'

import type { GridOptions } from 'ag-grid-community'
import type { CSSProperties, Ref } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { customGridTheme } from './theme'

export interface AgGridProps<Data extends Record<string, any>> extends GridOptions<Data> {
  className?: string
  style?: CSSProperties
  ref?: Ref<AgGridReact<Data>>
}

export const AgGrid = <Data extends Record<string, any> = Record<string, any>>(
  {
    className,
    style,
    defaultColDef,
    ...props
  }: AgGridProps<Data>,
) => {
  return (
    <div className={'w-full h-full ' + className} style={style}>
      <AgGridReact<Data>
        theme={customGridTheme}
        containerStyle={{ height: '100%', width: '100%' }}
        autoSizeStrategy={{ type: 'fitCellContents' }}
        {...props}
        defaultColDef={{
          filter: true,
          ...defaultColDef,
        }}
      />
    </div>
  )
}
