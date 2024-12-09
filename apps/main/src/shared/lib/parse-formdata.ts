export function parseFormData(formData: FormData): Record<string, any> {
  return Array.from(formData).reduce((acc, [key, value]) => {
    if (!acc[key]) {
      acc[key] = value
    } else {
      if (Array.isArray(acc[key])) {
        acc[key] = [...acc[key], value]
      } else {
        acc[key] = [acc[key], value]
      }
    }

    return acc
  }, {} as Record<string, any>)
}