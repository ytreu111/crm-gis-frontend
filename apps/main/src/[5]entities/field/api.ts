import type { Field } from './model/field'
import { apiClient } from '@/shared/api/client'

export function fetchFieldList({ directoryId }: { directoryId: string }) {
  return apiClient.get<Field[]>(
    '/directories/fields',
    {
      params: {
        directory_id: directoryId,
      },
    })
}
