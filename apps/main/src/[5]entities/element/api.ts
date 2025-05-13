import type { AxiosRequestConfig } from 'axios'
import type { QueryFunctionContext } from '@tanstack/react-query'
import { apiClient } from '@/shared/api/client'

export function getElementList({ directoryId }: { directoryId: string }, config?: AxiosRequestConfig) {
  return apiClient.get(
    '/elements',
    {
      ...config,
      params: {
        ...config?.params,
        directory_id: directoryId,
      },
    })
}

export async function queryElementList(params: { directoryId: string }, ctx: QueryFunctionContext) {
  const res = await getElementList(params, { signal: ctx.signal })

  return res.data
}