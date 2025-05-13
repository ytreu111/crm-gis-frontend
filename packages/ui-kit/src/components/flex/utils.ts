import cx from 'classnames'
import type { Property } from 'csstype'

// @ts-expect-error
const justifyContentValues: Record<Property.JustifyContent, string> = {
  'flex-start': 'justify-start',
  'flex-end': 'justify-end',
  'safe flex-end': 'justify-end-safe',
  'center': 'justify-center',
  'safe center': 'justify-center-safe',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
  'stretch': 'justify-stretch',
  'baseline': 'justify-baseline',
  'normal': 'justify-normal',
}

// @ts-expect-error
const alignItemsValues: Record<Property.AlignItems, string> = {
  'flex-start': 'items-start',
  'flex-end': 'items-end',
  'safe flex-end': 'items-end-safe',
  'center': 'items-center',
  'safe center': 'items-center-safe',
  'baseline': 'items-baseline',
  'last baseline': 'items-baseline-last',
  'stretch': 'items-stretch',
}

// @ts-expect-error
const wrapValues: Record<Property.FlexWrap, string> = {
  'nowrap': 'flex-nowrap',
  'wrap': 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
}

export function genClsJustify(justify: Property.JustifyContent) {
  return justifyContentValues[justify]
}

export function genClsAlign(align: Property.AlignItems) {
  return alignItemsValues[align]
}

export function genClsWrap(wrap: Property.FlexWrap | boolean) {
  if (typeof wrap === 'boolean') {
    if (wrap) return 'flex-wrap'
    return false
  }

  return wrapValues[wrap]
}

export function createFlexClassNames(justify: Property.JustifyContent, align: Property.AlignItems, wrap: Property.FlexWrap | boolean) {
  return cx(
    genClsJustify(justify),
    genClsAlign(align),
    genClsWrap(wrap),
  )
}