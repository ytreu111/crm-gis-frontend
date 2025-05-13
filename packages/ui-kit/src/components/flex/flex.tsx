import type { CustomComponent } from 'antd/es/_util/type'
import type { CSSProperties, FC, ReactNode, Ref } from 'react'
import cx from 'classnames'
import type { Property } from 'csstype'
import { createFlexClassNames } from './utils'
import styles from './flex.module.scss' with { type: 'css' }

export interface FlexProps {
  vertical?: boolean
  reverse?: boolean
  justify?: Property.JustifyContent
  align?: Property.AlignItems
  wrap?: boolean | Property.FlexWrap
  gap?: string | number
  width?: string | number
  height?: string | number
  component?: CustomComponent
  style?: CSSProperties
  className?: string
  children?: ReactNode
  ref?: Ref<HTMLElement>
}

export const Flex: FC<FlexProps> = (
  {
    vertical,
    reverse,
    justify = 'normal',
    align = 'normal',
    wrap = false,
    gap,
    component: Component = 'div',
    style,
    className,
    children,
    ref,
  },
) => {
  const _className = cx(
    className,
    styles.flex,
    {
      [styles['row-reverse']]: reverse,
      [styles['col']]: vertical && !reverse,
      [styles['col-reverse']]: vertical && reverse,
    },
    createFlexClassNames(justify, align, wrap),
  )


  const _style = { ...style }

  if (gap) {
    if (typeof gap === 'string') {
      // @ts-expect-error
      _style['--flex-custom-gap'] = gap
    } else {
      // @ts-expect-error
      _style['--flex-custom-gap'] = `calc(var(--spacing) * ${gap})`
    }
  }

  return (
    <Component className={_className} style={_style} ref={ref}>
      {children}
    </Component>
  )
}