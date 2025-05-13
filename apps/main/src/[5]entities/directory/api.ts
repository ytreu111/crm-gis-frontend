import type { QueryFunctionContext } from '@tanstack/react-query'
import type { AxiosRequestConfig } from 'axios'
import type { CreateDirectory, Directory, DirectoryWithFields } from './model/directory'
import { apiClient } from '@/shared/api/client'

export function createDirectory({ body }: { body: CreateDirectory }, config?: AxiosRequestConfig) {
  return apiClient.post<DirectoryWithFields>(
    `/directories/`,
    body,
    config,
  )
}

export function fetchDirectoryList(params?: object, config?: AxiosRequestConfig) {
  return apiClient.get<Directory[]>(
    '/directories',
    config,
  )
}

export function fetchDirectoryById({ directoryId }: { directoryId: string }, config?: AxiosRequestConfig) {
  return apiClient.get<Directory>(
    `/directories/${directoryId}`,
    config,
  )
}

export function updateDirectoryById({ directoryId, body }: { directoryId: string, body: CreateDirectory }, config?: AxiosRequestConfig) {
  return apiClient.put(
    `/directories/${directoryId}`,
    body,
    config,
  )
}

export function deleteDirectoryById({ directoryId }: { directoryId: string }, config?: AxiosRequestConfig) {
  return apiClient.delete(
    `/directories/${directoryId}`,
    config,
  )
}

export const queryFetchDirectoryList = async (ctx: QueryFunctionContext) => {
  const res = await fetchDirectoryList({}, { signal: ctx.signal })

  return res.data
}