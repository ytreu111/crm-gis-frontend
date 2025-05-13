import type { FC } from 'react'

export type NextComponent<Params extends Record<string, any> = Record<string, any>> = FC<{ params: Promise<Params> }>
