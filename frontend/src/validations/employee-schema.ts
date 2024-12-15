import { cpf } from 'cpf-cnpj-validator'
import { z } from 'zod'

// schema de validações para os dados pessoais do funcionário
const personalDataSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  gender: z.enum(['male', 'female'], { message: 'Sexo é obrigatório' }),
  cpf: z
    .string()
    .min(1, 'CPF é obrigatório')
    .refine((value) => cpf.isValid(value), {
      message: 'CPF inválido',
    }),
  birthday: z.any(),
  rg: z.string().min(1, 'RG é obrigatório'),
  role: z.string().min(1, 'Cargo é obrigatório'),
})

// schema de validação para os dados de EPIs do funcionário
const epiSchema = z.object({
  selectedEPI: z.string().min(1, 'EPI é obrigatório'),
  caNumber: z.string().min(1, 'Número do CA é obrigatório'),
})

// schema de atividades de um funcionário
const activitySchema = z.object({
  activityName: z.string().min(1, 'Atividade é obrigatória'),
  epis: z.array(epiSchema),
})

// schema para adicionar/editar um funcionário
export const employeeFormSchema = z.object({
  status: z.boolean(),
  personalData: personalDataSchema,
  activities: z.array(activitySchema),
  healthCertificate: z.instanceof(File).optional(),
})

// schema para adicionar/editar um funcionario sem epi
export const employeeFormSchemaWithoutActivities = z.object({
  status: z.boolean(),
  personalData: personalDataSchema,
  activities: z
    .array(
      z.object({
        activityName: z.string().optional(),
        epis: z
          .array(
            z.object({
              selectedEPI: z.string().optional(),
              caNumber: z.string().optional(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
  healthCertificate: z.instanceof(File).optional(),
})

// tipagem do schema
export type EmployeeForm = z.infer<typeof employeeFormSchemaWithoutActivities>
