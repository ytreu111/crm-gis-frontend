import { z } from 'zod'
import { FieldUnionSchema, EmptyFieldUnionSchema } from '@/entities/field/@x'

export const DirectorySchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  description: z.string().nullish(),
})

export const DirectoryWithFieldsSchema = z.object({
  ...DirectorySchema.shape,
  fields: z.array(FieldUnionSchema),
})

export const CreateDirectorySchema = DirectoryWithFieldsSchema
  .omit({ id: true })
  .extend({ fields: z.array(EmptyFieldUnionSchema) })

export type Directory = z.infer<typeof DirectorySchema>
export type DirectoryWithFields = z.infer<typeof DirectoryWithFieldsSchema>
export type CreateDirectory = z.infer<typeof CreateDirectorySchema>