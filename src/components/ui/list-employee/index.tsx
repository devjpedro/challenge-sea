import { Button, Flex, type MenuProps, Typography } from 'antd'
import { FaEllipsisH, FaPlus } from 'react-icons/fa'

import {
  AddEmployeeBtn,
  CardEmployee,
  CustomDropdown,
  CustomTag,
  FlexContainerBtns,
  ListContainer,
} from './styles'

const employeeData = [
  {
    id: 1,
    name: 'Daniel Alves da Silva',
    cpf: '000.000.000-99',
    status: 'Ativo',
    role: 'Cargo 1',
  },
  {
    id: 2,
    name: 'Giselle Torres Lopes',
    cpf: '000.000.000-88',
    status: 'Inativo',
    role: 'Cargo 2',
  },
  {
    id: 3,
    name: 'Ana Bispo dos Santos',
    cpf: '000.000.000-99',
    status: 'Inativo',
    role: 'Cargo 1',
  },
  {
    id: 4,
    name: 'Regina Elisa Souza',
    cpf: '000.000.000-99',
    status: 'Ativo',
    role: 'Cargo 3',
  },
]

const items: MenuProps['items'] = [
  {
    label: 'Alterar',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Excluir',
    key: '2',
  },
]

export function ListEmployee() {
  return (
    <ListContainer title="Funcionário (s)">
      <AddEmployeeBtn
        variant="outlined"
        color="primary"
        icon={<FaPlus size={10} />}
      >
        Adicionar Funcionário
      </AddEmployeeBtn>

      <Flex
        gap="large"
        justify="space-between"
        align="center"
        style={{ marginTop: '1rem' }}
      >
        <FlexContainerBtns gap="large" align="center">
          <Button variant="outlined" color="primary" size="large">
            Ver apenas ativos
          </Button>
          <Button variant="outlined" color="primary" size="large" disabled>
            Limpar Filtros
          </Button>
        </FlexContainerBtns>

        <Typography.Text style={{ fontSize: '1rem', fontWeight: '500' }}>
          Ativos 2/4
        </Typography.Text>
      </Flex>

      <Flex vertical justify="center" gap="large" style={{ marginTop: '3rem' }}>
        {employeeData.map((employee) => (
          <CardEmployee
            key={employee.id}
            vertical
            gap="0.25rem"
            status={employee.status}
          >
            <Typography.Text className="name-user">
              {employee.name}
            </Typography.Text>
            <Flex gap="small">
              <CustomTag>{employee.cpf}</CustomTag>
              <CustomTag>{employee.status}</CustomTag>
              <CustomTag>{employee.role}</CustomTag>
            </Flex>

            <CustomDropdown
              menu={{ items }}
              trigger={['click']}
              placement="bottomCenter"
              arrow
            >
              <FaEllipsisH size={20} />
            </CustomDropdown>
          </CardEmployee>
        ))}
      </Flex>
    </ListContainer>
  )
}
