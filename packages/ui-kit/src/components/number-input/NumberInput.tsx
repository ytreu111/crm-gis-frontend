import { SNumberInput } from './NumberInput.styled'
import { forwardRef } from 'react'
import { InputNumberProps } from 'antd/es/input-number'

type PickedAntdNumberInputProps = Pick<InputNumberProps, 'value' | 'onChange' | 'defaultValue' | 'style' | 'className'>

export interface NumberInputProps extends PickedAntdNumberInputProps {
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((
  props,
  ref,
) => {
  return (
    <SNumberInput
      {...props}
      ref={ref}
      // @ts-expect-error
      variant={null}
      placeholder="test"
    />
  )
})