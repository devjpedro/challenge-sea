import { api } from '../lib/axios'

export interface ActivitiesPayload {
  name: string
  epis: {
    name: string
    caCode: string
  }[]
}

export interface CreateEmployeesRequest {
  status: boolean
  name: string
  gender: string
  cpf: string
  birthDay: string
  rg: string
  role: string
  healthCertificate?: string
  activities: ActivitiesPayload[]
}

export interface CreateEmployeesResponse {
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

export async function createEmployee(body: CreateEmployeesRequest) {
  const response = await api.post<CreateEmployeesResponse[]>('/employee', body)

  return response.data
}
