import { Button, Flex, Switch, Typography } from 'antd'
import { FaArrowLeft } from 'react-icons/fa6'

import { EmployeeActivityInformationForm } from '../../form/employee-activity-information'
import { EmployeeHealthCertificateForm } from '../../form/employee-health-certificate'
import { EmployeePersonalDataForm } from '../../form/employee-personal-data'
import { Container, SwitchInputContainer } from './styles'

export function AddEmployee() {
  return (
    <Container
      title={
        <Flex align="center" justify="start" gap="1rem">
          <FaArrowLeft size={20} style={{ cursor: 'pointer' }} />
          <Typography.Title level={2}>Adicionar Funcionário</Typography.Title>
        </Flex>
      }
    >
      <SwitchInputContainer
        align="center"
        justify="space-between"
        wrap="wrap"
        gap="1rem"
      >
        <label htmlFor="status">O trabalhador está ativo ou inativo?</label>
        <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" />
      </SwitchInputContainer>
      <EmployeePersonalDataForm />
      <EmployeeActivityInformationForm />
      <EmployeeHealthCertificateForm />
      <Button
        style={{ width: '100%', marginTop: '1.5rem' }}
        size="large"
        variant="outlined"
        color="primary"
      >
        Salvar
      </Button>
    </Container>
  )
}
