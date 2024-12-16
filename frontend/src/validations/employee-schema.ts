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
  birthday: z.any().refine((value) => !!value, {
    message: 'Data de Nascimento é obrigatória',
  }),
  rg: z.string().min(1, 'RG é obrigatório'),
  role: z.string().min(1, 'Cargo é obrigatório'),
})

// construtor do schema geral
export const buildEmployeeFormSchema = (hasEpi: boolean) => {
  return z.object({
    status: z.boolean(),
    personalData: personalDataSchema,
    activities: z
      .array(
        z.object({
          activityName: z
            .string()
            .min(hasEpi ? 1 : 0, 'Atividade é obrigatória'),
          epis: z.array(
            z.object({
              selectedEPI: z.string().min(hasEpi ? 1 : 0, 'EPI é obrigatório'),
              caNumber: z
                .string()
                .min(hasEpi ? 1 : 0, 'Número do CA é obrigatório'),
            }),
          ),
        }),
      )
      .optional(),
    healthCertificate: z.string().optional(),
  })
}

// tipagem do schema
export type EmployeeForm = z.infer<ReturnType<typeof buildEmployeeFormSchema>>
