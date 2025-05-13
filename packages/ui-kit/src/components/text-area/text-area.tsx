import type { TextAreaProps as AntdTextAreaProps } from 'antd/es/input/TextArea'
import { Input } from 'antd'
import { ChangeEvent, FC, Ref } from 'react'
import cx from 'classnames'
import styles from './text-area.module.scss'

const { TextArea: AntdTextArea } = Input


// type PickedAntdTextAreaProps = Pick<AntdTextAreaProps, 'classNames'>

export interface TextAreaProps {
  placeholder?: string
  onChange?: (v: string, e: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  value?: string | null
  ref?: Ref<HTMLTextAreaElement>
}

export const TextArea: FC<TextAreaProps> = (
  {
    onChange,
    value,
    placeholder,
    className,
    ref,
  },
) => {
  const _onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e.target.value, e)
  }

  return (
    <AntdTextArea
      ref={ref}
      // @ts-expect-error
      value={value}
      placeholder={placeholder}
      rootClassName={cx(className, styles['text-area'])}
      onChange={_onChange}
    />
  )
}
