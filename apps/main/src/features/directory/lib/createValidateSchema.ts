import { ZodRawShape, ZodFirstPartySchemaTypes } from 'zod'
import { z } from 'zod'
import { DirectoryField, DirectoryFieldTypeEnum } from '../model/directory-field.model'

export function createValidateSchema(fields: DirectoryField[]) {
  const zodShapes = fields.reduce((acc, field) => {
    let fieldShape: ZodFirstPartySchemaTypes | null = null

    switch (field.type) {
      case DirectoryFieldTypeEnum.String: {
        fieldShape = z.string()

        if (field.required || field.multiple) {
          fieldShape = fieldShape.min(1)
        }

        break
      }
      case DirectoryFieldTypeEnum.Integer:
      case DirectoryFieldTypeEnum.Float: {
        fieldShape = z.number()
      }
    }

    if (field.multiple && fieldShape) {
      fieldShape = fieldShape?.array()
    }


    if (fieldShape) {
      acc[field.code] = fieldShape
    }

    return acc
  }, {} as ZodRawShape)

  return z.object({ ...zodShapes })
}