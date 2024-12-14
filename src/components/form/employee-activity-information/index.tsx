import { Button, Checkbox, Flex, Input, Select, Typography } from 'antd'

import {
  CustomLabel,
  EmployeeActivityContainer,
  SelectActivityContainer,
} from './styled'

export function EmployeeActivityInformationForm() {
  return (
    <EmployeeActivityContainer vertical gap="1.5rem">
      <Flex vertical gap="0.875rem">
        <Typography.Title level={5}>
          Quais EPIs o trabalhador usa na atividade?
        </Typography.Title>

        <Checkbox>O trabalhador não usa EPI.</Checkbox>
      </Flex>

      <SelectActivityContainer vertical gap="2rem">
        <Flex vertical>
          <CustomLabel htmlFor="activity">Selecione a atividade:</CustomLabel>
          <Select
            size="large"
            placeholder="Atividade"
            id="activity"
            options={[
              { value: 'atividade-1', label: 'Atividade 1' },
              { value: 'atividade-2', label: 'Atividade 2' },
              { value: 'atividade-3', label: 'Atividade 3' },
              { value: 'atividade-4', label: 'Atividade 4' },
              { value: 'atividade-5', label: 'Atividade 5' },
            ]}
          />
        </Flex>

        <Flex gap="2rem" align="end">
          <Flex vertical style={{ flex: 1 }}>
            <CustomLabel htmlFor="epi">Selecione o EPI:</CustomLabel>
            <Select
              size="large"
              placeholder="Selecione o EPI"
              id="epi"
              options={[
                { value: 'capacete-seguranca', label: 'Capacete de Segurança' },
                { value: 'oculos-seguranca', label: 'Óculos de Segurança' },
                { value: 'protetor-auricular', label: 'Protetor Auricular' },
                { value: 'respirador', label: 'Respirador' },
                { value: 'luva-seguranca', label: 'Luva de Segurança' },
                { value: 'botina-seguranca', label: 'Botina de Segurança' },
                { value: 'avental-protecao', label: 'Avental de Proteção' },
                { value: 'cinto-seguranca', label: 'Cinto de Segurança' },
                { value: 'mascara-solda', label: 'Máscara de Solda' },
                { value: 'viseira-facial', label: 'Viseira Facial' },
              ]}
            />
          </Flex>

          <Flex vertical style={{ flex: 1 }}>
            <CustomLabel htmlFor="caNumber">
              Informe o número do CA:
            </CustomLabel>

            <Input placeholder="Número do CA" id="caNumber" />
          </Flex>

          <Button
            style={{ flex: 1 }}
            size="large"
            variant="outlined"
            color="primary"
          >
            Adicionar EPI
          </Button>
        </Flex>
      </SelectActivityContainer>
      <Button
        style={{ flex: 1 }}
        size="large"
        variant="outlined"
        color="primary"
      >
        Adicionar outra atividade
      </Button>
    </EmployeeActivityContainer>
  )
}
