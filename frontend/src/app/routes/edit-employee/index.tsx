import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Flex, Form, message, Switch, Typography } from 'antd'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa6'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useSearchParams } from 'react-router'

import type {
  ActivitiesPayload,
  CreateEmployeesRequest,
} from '../../../api/create-employee'
import { getEmployees } from '../../../api/get-employees'
import { updateEmployee } from '../../../api/update-employee'
import { EmployeeActivityInformationForm } from '../../../components/form/employee-activity-information'
import { EmployeeHealthCertificateForm } from '../../../components/form/employee-health-certificate'
import { EmployeePersonalDataForm } from '../../../components/form/employee-personal-data'
import {
  buildEmployeeFormSchema,
  type EmployeeForm,
} from '../../../validations/employee-schema'
import { Container, SwitchInputContainer } from './styles'

export function EditEmployee() {
  // States
  const [noHasEpi, setNoHasEpi] = useState(false)

  // Hooks
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const form = useForm<EmployeeForm>({
    resolver: zodResolver(buildEmployeeFormSchema(!noHasEpi)),

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

  const { data: result, isLoading: isLoadingEmployees } = useQuery({
    queryKey: ['employees'],
    queryFn: () => getEmployees(),
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5,
  })

  const { mutateAsync: updateEmployeeFn } = useMutation({
    mutationFn: updateEmployee,
    onSuccess: () => {
      message.success('Funcionário atualizado com sucesso!')
      queryClient.invalidateQueries('employees')
    },
    onError: (error) => {
      console.error(error)
      message.error(
        'Erro ao atualizar funcionário. Tente novamente mais tarde.',
      )
    },
  })

  // Vars
  const idParam = searchParams.get('id')

  const selectedEmployee = result?.find((employee) => employee.id === idParam)

  // Funcs
  const onSubmitFn = async ({
    personalData,
    status,
    activities,
    healthCertificate,
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
      healthCertificate,
      activities: noHasEpi ? [] : activitiesPayload,
    }

    await updateEmployeeFn({
      id: selectedEmployee?.id ?? '',
      req: payload,
    })
  }

  const handleClickBack = () => {
    navigate('/funcionarios/itens/1')
  }

  // Effects
  useEffect(() => {
    if (isLoadingEmployees || !selectedEmployee) return

    form.setValue('status', selectedEmployee?.status)
    form.setValue('personalData.name', selectedEmployee?.name)
    form.setValue(
      'personalData.gender',
      selectedEmployee?.gender === 'male' ? 'male' : 'female',
    )
    form.setValue('personalData.cpf', selectedEmployee?.cpf)
    form.setValue('personalData.rg', selectedEmployee?.rg)
    form.setValue('personalData.role', selectedEmployee?.role)
    form.setValue('personalData.birthday', dayjs(selectedEmployee?.birthDay))

    if (selectedEmployee.healthCertificate) {
      form.setValue('healthCertificate', selectedEmployee.healthCertificate)
    }

    if (!selectedEmployee.activities.length) {
      setNoHasEpi(true)
      return
    }

    form.setValue(
      'activities',
      selectedEmployee.activities.map((activity) => ({
        activityName: activity.name,
        epis: activity.epis.map((epi) => ({
          selectedEPI: epi.name,
          caNumber: epi.caCode,
        })),
      })),
    )
  }, [isLoadingEmployees, form, selectedEmployee])

  return (
    <Container
      title={
        <Flex align="center" justify="start" gap="1rem">
          <FaArrowLeft
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={handleClickBack}
          />
          <Typography.Title level={2}>Editar Funcionário</Typography.Title>
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
            useEpi={noHasEpi}
            setUseEpi={setNoHasEpi}
            isEdit={true}
          />
          <EmployeeHealthCertificateForm />
          <Button
            style={{ width: '100%', marginTop: '1.5rem' }}
            size="large"
            variant="outlined"
            color="primary"
            htmlType="submit"
            loading={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Salvando...' : 'Salvar'}
          </Button>
        </Form>
      </FormProvider>
    </Container>
  )
}
