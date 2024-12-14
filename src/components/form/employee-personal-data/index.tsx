import { Col, Input, Radio, Row, Select } from 'antd'

import { CustomLabel, EmployeeInformationContainer } from './styled'

export function EmployeePersonalDataForm() {
  return (
    <EmployeeInformationContainer vertical gap="1.5rem">
      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="name">Nome</CustomLabel>
          <Input placeholder="Nome" id="name" />
        </Col>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="sex" style={{ marginBottom: '1rem' }}>
            Sexo
          </CustomLabel>

          <Radio.Group id="sex">
            <Radio value="feminino">Feminino</Radio>
            <Radio value="masculino">Masculino</Radio>
          </Radio.Group>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="cpf">CPF</CustomLabel>
          <Input placeholder="CPF" id="cpf" />
        </Col>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="birthday">Data de Nascimento</CustomLabel>
          <Input placeholder="Data de Nascimento" id="birthday" />
        </Col>
      </Row>

      <Row gutter={24}>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="rg">RG</CustomLabel>
          <Input placeholder="RG" id="rg" />
        </Col>
        <Col xs={24} sm={12}>
          <CustomLabel htmlFor="role">Cargo</CustomLabel>

          <Select
            size="large"
            placeholder="Cargo"
            defaultValue="cargo-1"
            id="role"
            options={[
              { value: 'cargo-1', label: 'Cargo 1' },
              { value: 'cargo-2', label: 'Cargo 2' },
              { value: 'cargo-3', label: 'Cargo 3' },
              { value: 'cargo-4', label: 'Cargo 4' },
              { value: 'cargo-5', label: 'Cargo 5' },
            ]}
          />
        </Col>
      </Row>
    </EmployeeInformationContainer>
  )
}
