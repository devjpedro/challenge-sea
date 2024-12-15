import { api } from '../lib/axios'

export async function deleteEmployee(id: string) {
  const response = await api.delete<{ message: string }>('/employee', {
    params: {
      id,
    },
  })

  return response.data
}
