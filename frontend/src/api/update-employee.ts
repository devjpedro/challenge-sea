import { api } from '../lib/axios'

export interface ActivitiesPayload {
  name: string
  epis: {
    name: string
    caCode: string
  }[]
}

export interface UpdateEmployeesRequest {
  status: boolean
  name: string
  gender: string
  cpf: string
  birthDay: string
  rg: string
  role: string
  activities: ActivitiesPayload[]
}

interface UpdateEmployeesBody {
  req: UpdateEmployeesRequest
  id: string
}

export interface UpdateEmployeesResponse {
  id: string
  status: boolean
  name: string
  gender: string
  cpf: string
  birthDay: string
  rg: string
  role: string
  activities: {
    id: string
    name: string
    employeeId: string
    epis: {
      id: string
      name: string
      caCode: string
      activityId: string
    }[]
  }[]
}

export async function updateEmployee(body: UpdateEmployeesBody) {
  const response = await api.put<UpdateEmployeesResponse[]>(
    '/employee',
    body.req,
    {
      params: {
        id: body.id,
      },
    },
  )

  return response.data
}
