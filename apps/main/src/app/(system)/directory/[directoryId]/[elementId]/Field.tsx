'use client'

import { FC, useCallback, useMemo } from 'react'
import type { ControllerProps } from 'react-hook-form'
import { Controller, useController } from 'react-hook-form'
import { DirectoryField, DirectoryFieldTypeEnum } from '@/features/directory/model/directory-field.model'
import { Input } from '@/shared/ui/input/input'

export const _Field = () => {
  return null
}

export const Test = ({ field }) => {
  const { field: formFild } = useController({ name: field.code })
  // console.log(asd)

  const render = useCallback<ControllerProps['render']>(({}) => {
    return null
  }, [])

  return (
    <Controller
      render={render}
      name={field.code}
    />
  )
}


export interface FieldProps {
  field: DirectoryField
}

function inputResolver(type: DirectoryFieldTypeEnum) {
  switch (type) {
    case DirectoryFieldTypeEnum.String: {
      return Input
    }
  }
}

export const Field: FC<FieldProps> = ({ field }) => {
  const { field: formField } = useController({ name: field.code })
  console.log(formField)
  const Render = inputResolver(field.type)

  if (!Render) return null

  return <Render {...formField} />
//   return (
//     <div className="flex gap-2">
//       <span>{field.name}</span>
//       <div className="flex flex-col">
//         {field.multiple
//           ? (
//             <>
//               <Input name={field.multiple ? `${field.code}` : field.code} placeholder={field.type} />
//               <Input name={field.multiple ? `${field.code}` : field.code} placeholder={field.type} />
//             </>
//           )
//           : (
//             <Controller
//               render={}
//               name={field.code}
//             />
//           <input
//           type={field.type === 'integer' ? 'number' : 'text'}
//            placeholder={field.type}
//       />
//       )
//       }
//     </div>
// </div>
// )
}