import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Flex, Form, message, Switch, Typography } from 'antd'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa6'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router'

import {
  type ActivitiesPayload,
  createEmployee,
  type CreateEmployeesRequest,
} from '../../../api/create-employee'
import { EmployeeActivityInformationForm } from '../../../components/form/employee-activity-information'
import { EmployeeHealthCertificateForm } from '../../../components/form/employee-health-certificate'
import { EmployeePersonalDataForm } from '../../../components/form/employee-personal-data'
import {
  type EmployeeForm,
  employeeFormSchema,
  employeeFormSchemaWithoutActivities,
} from '../../../validations/employee-schema'
import { Container, SwitchInputContainer } from './styles'

export function AddEmployee() {
  // States
  const [dontHasEpi, setDontHasEpi] = useState(false)

  // Hooks
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const form = useForm<EmployeeForm>({
    resolver: zodResolver(
      dontHasEpi ? employeeFormSchemaWithoutActivities : employeeFormSchema,
    ),
    defaultValues: {
      status: false,
      personalData: {
        name: '',
        birthday: undefined,
        cpf: '',
        gender: undefined,
        rg: '',
        role: '',
      },
      activities: [
        {
          activityName: '',
          epis: [
            {
              selectedEPI: '',
              caNumber: '',
            },
          ],
        },
      ],
      healthCertificate: undefined,
    },
  })

  const { mutateAsync: createEmployeeFn } = useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      message.success('Funcionário criado com sucesso!')
      queryClient.invalidateQueries('employees')
    },
    onError: (error) => {
      console.error(error)
      message.error('Erro ao criar funcionário. Tente novamente mais tarde.')
    },
  })

  // Funcs
  const onSubmitFn = async ({
    status,
    personalData,
    activities,
  }: EmployeeForm) => {
    const activitiesPayload: ActivitiesPayload[] = activities?.length
      ? activities.map((activity) => ({
          name: activity.activityName ?? '',
          epis: activity.epis?.length
            ? activity.epis.map((epi) => ({
                name: epi.selectedEPI ?? '',
                caCode: epi.caNumber ?? '',
              }))
            : [],
        }))
      : []

    const payload: CreateEmployeesRequest = {
      status,
      name: personalData.name,
      gender: personalData.gender,
      cpf: personalData.cpf,
      birthDay: personalData.birthday?.toISOString() ?? '',
      rg: personalData.rg,
      role: personalData.role,
      activities: dontHasEpi ? [] : activitiesPayload,
    }

    await createEmployeeFn(payload)
  }

  const handleClickBack = () => {
    navigate('/itens/1')
  }

  return (
    <Container
      title={
        <Flex align="center" justify="start" gap="1rem">
          <FaArrowLeft
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={handleClickBack}
          />
          <Typography.Title level={2}>Adicionar Funcionário</Typography.Title>
        </Flex>
      }
    >
      <FormProvider {...form}>
        <Form onFinish={form.handleSubmit(onSubmitFn)}>
          <Controller
            control={form.control}
            name="status"
            render={({ field }) => (
              <SwitchInputContainer
                align="center"
                justify="space-between"
                wrap="wrap"
                gap="1rem"
              >
                <label htmlFor="status">
                  O trabalhador está ativo ou inativo?
                </label>
                <Switch
                  checkedChildren="Ativo"
                  unCheckedChildren="Inativo"
                  checked={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              </SwitchInputContainer>
            )}
          />

          <EmployeePersonalDataForm />
          <EmployeeActivityInformationForm
            useEpi={dontHasEpi}
            setUseEpi={setDontHasEpi}
          />
          <EmployeeHealthCertificateForm />
          <Button
            style={{ width: '100%', marginTop: '1.5rem' }}
            size="large"
            variant="outlined"
            color="primary"
            htmlType="submit"
          >
            Salvar
          </Button>
        </Form>
      </FormProvider>
    </Container>
  )
}
