import { AxiosClient } from '@/shared/lib/axios-client'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { Field, Test } from '@/app/(system)/directory/[directoryId]/[elementId]/Field'
import { createValidateSchema } from '@/features/directory/lib/createValidateSchema'
import { parseFormData } from '@/shared/lib/parse-formdata'
import { DirectoryField } from '@/features/directory/model/directory-field.model'
import { Form } from '@/app/(system)/directory/[directoryId]/[elementId]/Form'

async function createElement(fields: DirectoryField[], prevState, formData: FormData) {
  'use server'

  console.log(prevState)
  console.log('formdata', formData)
  const validateSchema = createValidateSchema(fields)
  const data = parseFormData(formData)
  console.log('data', data)
  // const data: Record<string, any> = {}
  //
  // for (const key of formData.keys()) {
  //   data[key] = formData.get(key)
  // }
  //
  const validdation = validateSchema.safeParse(data)
  //
  // if (!re.success) {
  //   // console.log(re.error.issues)
  // }


  // console.log(formData)
  // console.log(Object.fromEntries(formData))
  console.log(data)
  console.log(validdation.error?.issues)

  if (!validdation.success) {
    console.log(validdation.error.flatten().fieldErrors)
    return {
      errors: validdation.error.flatten().fieldErrors,
    }
  }
}

const DirectoryElementCreatePage = async ({ params }) => {
  const { directoryId, elementId } = await params

  const { data: fields } = await AxiosClient.get(`/directories/${directoryId}/fields`)
  const action = createElement.bind(null, fields)


  return (
    <Form
      action={action}
    >
      <div className="flex">
        <Button type="submit">Сохранить</Button>
        <Link href={`/directory/${directoryId}`}>Отменить</Link>
      </div>
      <div className="flex flex-col gap-2 pt-2">
        {
          fields.map((field) => (<Field key={field.id} field={field} />))
        }
      </div>
    </Form>
  )
}

export default DirectoryElementCreatePage