import { Col, Input, Radio, Row, Select } from 'antd'

import { EmployeeInformationContainer } from './styled'

export function EmployeePersonalDataForm() {
  return (
    <EmployeeInformationContainer vertical gap="1.5rem">
      <Row gutter={24}>
        <Col span={12}>
          <label htmlFor="name">Nome</label>
          <Input placeholder="Nome" id="name" />
        </Col>
        <Col span={12}>
          <label htmlFor="sex" style={{ marginBottom: '1rem' }}>
            Sexo
          </label>

          <Radio.Group id="sex">
            <Radio value="feminino">Feminino</Radio>
            <Radio value="masculino">Masculino</Radio>
          </Radio.Group>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <label htmlFor="cpf">CPF</label>
          <Input placeholder="CPF" id="cpf" />
        </Col>
        <Col span={12}>
          <label htmlFor="birthday">Data de Nascimento</label>
          <Input placeholder="Data de Nascimento" id="birthday" />
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <label htmlFor="rg">RG</label>
          <Input placeholder="RG" id="rg" />
        </Col>
        <Col span={12}>
          <label htmlFor="role">Cargo</label>

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
