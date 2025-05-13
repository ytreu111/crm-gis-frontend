import { apiClient } from '@/shared/api/client'

export const getDirectoryElementsByDirectory = (directoryId) => apiClient.get(
  `/elements/?directory_id=${directoryId}`,
)

export const getDirectoryElementById = (elementId) => apiClient.get(
  `directories/elements/${elementId}`,
)

export const createDirectoryElement = (directoryId, body) => apiClient.post(
  `directories/${directoryId}/elements`,
  body,
)

export const updateDirectoryElement = (elementId, body) => apiClient.put(
  `directories/elements/${elementId}`,
  body,
)