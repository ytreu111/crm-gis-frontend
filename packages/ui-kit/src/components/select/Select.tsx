import type { SelectProps as AntdSelectProps } from 'antd'
import type { RefSelectProps } from 'antd/lib/select'
import { SSelect } from './Select.styled'
import { forwardRef, ReactElement, Ref } from 'react'
import { CloseOutlined } from '@ant-design/icons'

type PickedAntdSelectProps<ValueType = any> = Pick<AntdSelectProps<ValueType>,
  'allowClear' | 'options' | 'onChange' | 'autoFocus' | 'style' | 'className' | 'placeholder'
>

export interface SelectProps<ValueType = any> extends PickedAntdSelectProps<ValueType> {
}

const InternalSelect = <ValueType = any>(
  {
    allowClear,
    ...props
  }: SelectProps<ValueType>,
  ref: Ref<RefSelectProps>,
) => {
  return (
    <SSelect
      ref={ref}
      showSearch
      allowClear={allowClear && { clearIcon: <CloseOutlined /> }}
      {...props}
    />
  )
}

export const Select = forwardRef(InternalSelect) as unknown as
  <ValueType = any>(props: SelectProps<ValueType> & { ref?: RefSelectProps }) => ReactElement