import { InputNumber as AntdInputNumber, InputNumberProps as AntdInputNumberProps } from 'antd'
import styles from './input-number.module.scss'
import cx from 'classnames'

type ValueType = string | number

export interface InputNumberProps<
  S extends boolean = false,
  T extends ValueType = S extends true ? string : number
> extends Omit<AntdInputNumberProps<T>, 'max' | 'min'> {
  stringMode?: S
  max?: T | null
  min?: T | null
  error?: boolean
}

export const InputNumber = <S extends boolean = false, >(
  {
    className,
    max,
    min,
    erorr,
    ...props
  }: InputNumberProps<S>,
) => {
  return (
    <AntdInputNumber
      className={cx(styles['input-wrap'], className)}
      max={max ?? undefined}
      min={min ?? undefined}
      {...props}
    />
  )
}
