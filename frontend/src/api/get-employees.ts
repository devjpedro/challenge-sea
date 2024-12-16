import { api } from '../lib/axios'

export interface GetEmployeesResponse {
  id: string
  status: boolean
  name: string
  gender: string
  cpf: string
  birthDay: string
  rg: string
  role: string
  healthCertificate?: string
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

export async function getEmployees() {
  const response = await api.get<GetEmployeesResponse[]>('/employees')

  return response.data
}
