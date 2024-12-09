'use client'

import { AgGridReact } from 'ag-grid-react'
import { forwardRef, ReactElement, Ref } from 'react'
import { GridOptions } from 'ag-grid-community'
import { themeQuartz } from '@ag-grid-community/theming'


const myTheme = themeQuartz
  .withParams({
    backgroundColor: '#1f2836',
    browserColorScheme: 'dark',
    chromeBackgroundColor: {
      ref: 'foregroundColor',
      mix: 0.07,
      onto: 'backgroundColor',
    },
    foregroundColor: '#FFF',
    headerFontSize: 14,
  })

export interface AgGridProps<Data extends Record<string, any>> extends GridOptions<Data> {
  className?: string
}

const InternalAgGrid = <Data extends Record<string, any>>(
  {
    className,
    style,
    defaultColDef,
    ...props
  }: AgGridProps<Data>,
  ref: Ref<AgGridReact<Data>>,
) => {
  return (
    <div className={'w-full h-full ' + className} style={style}>
      <AgGridReact<Data>
        theme={myTheme}
        containerStyle={{ height: '100%', width: '100%' }}
        autoSizeStrategy={{ type: 'fitCellContents' }}
        {...props}
        ref={ref}
        // rowData={data}
        defaultColDef={{
          filter: true,
          ...defaultColDef,
        }}
      />
    </div>
  )
}

export const AgGrid = forwardRef(InternalAgGrid) as unknown as (
  <Data extends Record<string, any>>(props: AgGridProps<Data> & { ref?: Ref<AgGridReact> }) => ReactElement
  )