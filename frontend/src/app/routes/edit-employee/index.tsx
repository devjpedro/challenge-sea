import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Flex, Form, Switch, Typography } from 'antd'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router'

import { EmployeeActivityInformationForm } from '../../../components/form/employee-activity-information'
import { EmployeeHealthCertificateForm } from '../../../components/form/employee-health-certificate'
import { EmployeePersonalDataForm } from '../../../components/form/employee-personal-data'
import {
  type EmployeeForm,
  employeeFormSchema,
  employeeFormSchemaWithoutActivities,
} from '../../../validations/employee-schema'
import { Container, SwitchInputContainer } from './styles'

export function EditEmployee() {
  const [noHasEpi, setNoHasEpi] = useState(false)

  const navigate = useNavigate()

  const form = useForm<EmployeeForm>({
    resolver: zodResolver(
      noHasEpi ? employeeFormSchemaWithoutActivities : employeeFormSchema,
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

  const onSubmitFn = (data: EmployeeForm) => {
    console.log(data)
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
            noHasEpi={noHasEpi}
            setNoHasEpi={setNoHasEpi}
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
