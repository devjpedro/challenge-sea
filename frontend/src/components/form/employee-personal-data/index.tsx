import { Col, DatePicker, Input, Radio, Row, Select } from 'antd'
import dayjs from 'dayjs'
import { useFormContext } from 'react-hook-form'
import { FormItem } from 'react-hook-form-antd'

import type { EmployeeForm } from '../../../validations/employee-schema'
import { CustomLabel, EmployeeInformationContainer } from './styled'

export function EmployeePersonalDataForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext<EmployeeForm>()

  const minDate = dayjs('1900-01-01')
  const maxDate = dayjs().subtract(18, 'years')

  return (
    <EmployeeInformationContainer vertical>
      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="name">Nome</CustomLabel>
          <FormItem
            control={control}
            name="personalData.name"
            help={errors.personalData?.name?.message}
          >
            <Input placeholder="Nome" id="name" />
          </FormItem>
        </Col>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="gender" style={{ marginBottom: '1rem' }}>
            Sexo
          </CustomLabel>

          <FormItem control={control} name="personalData.gender">
            <Radio.Group id="gender">
              <Radio value="female">Feminino</Radio>
              <Radio value="male">Masculino</Radio>
            </Radio.Group>
          </FormItem>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="cpf">CPF</CustomLabel>
          <FormItem control={control} name="personalData.cpf">
            <Input placeholder="CPF" id="cpf" />
          </FormItem>
        </Col>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="birthday">Data de Nascimento</CustomLabel>
          <FormItem control={control} name="personalData.birthday">
            <DatePicker
              placeholder="Data de Nascimento"
              id="birthday"
              style={{ width: '100%' }}
              format="DD/MM/YYYY"
              minDate={minDate}
              maxDate={maxDate}
              disabledDate={(current) =>
                current &&
                (current.isBefore(minDate, 'day') ||
                  current.isAfter(maxDate, 'day'))
              }
            />
          </FormItem>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="rg">RG</CustomLabel>

          <FormItem control={control} name="personalData.rg">
            <Input placeholder="RG" id="rg" />
          </FormItem>
        </Col>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="role">Cargo</CustomLabel>

          <FormItem control={control} name="personalData.role">
            <Select
              size="large"
              placeholder="Cargo"
              defaultValue="Cargo 1"
              id="role"
              options={[
                { value: 'Cargo 1', label: 'Cargo 1' },
                { value: 'Cargo 2', label: 'Cargo 2' },
                { value: 'Cargo 3', label: 'Cargo 3' },
                { value: 'Cargo 4', label: 'Cargo 4' },
                { value: 'Cargo 5', label: 'Cargo 5' },
              ]}
            />
          </FormItem>
        </Col>
      </Row>
    </EmployeeInformationContainer>
  )
}
