import { Button, Flex, message, Switch, Typography } from 'antd'
import { useState } from 'react'
import { FaEllipsisH, FaPlus } from 'react-icons/fa'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router'
import { mask } from 'remask'

import { deleteEmployee } from '../../../api/delete-employee'
import { getEmployees } from '../../../api/get-employees'
import { useSteps } from '../../../hooks/useSteps'
import {
  AddEmployeeBtn,
  CardEmployee,
  Container,
  CustomDropdown,
  CustomTag,
  FlexContainerBtns,
  SwitchContainer,
} from './styles'

export function ListEmployee() {
  const { completeStep, uncompleteStep, activeStep } = useSteps()

  const [onlyActives, setOnlyActives] = useState(false)
  const [isCompleted, setIsCompleted] = useState(activeStep?.completed ?? false)

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data: result, isLoading: isLoadingEmployees } = useQuery({
    queryKey: ['employees'],
    queryFn: () => getEmployees(),
    staleTime: 1000 * 60 * 1, // revalida a cada 1 minuto
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 5, // mantém em cache por 5 minutos
  })

  const { mutateAsync: deleteEmployeeFn } = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: (data) => {
      message.success(data.message)
      queryClient.invalidateQueries(['employees'])
    },
    onError: (error) => {
      console.error(error)
      message.error('Erro ao remover funcionário')
    },
  })

  // vars
  const employees = onlyActives
    ? result?.filter((employee) => employee.status)
    : result

  // funcs
  const handleClickAddEmployee = () => {
    navigate('/itens/1/adicionar')
  }

  const handleClickEditEmployee = (id: string) => {
    navigate(`/itens/1/editar/?id=${id}`)
  }

  const handleClickDeleteEmployee = async (id: string) => {
    await deleteEmployeeFn(id)
  }

  const handleClickFilter = () => {
    setOnlyActives((prev) => !prev)
  }

  const handleChangeSwitch = (e: boolean) => {
    setIsCompleted(e)
    if (e) {
      completeStep(1)

      return
    }

    uncompleteStep(1)
  }

  return (
    <Container title="Funcionário (s)">
      <AddEmployeeBtn
        variant="outlined"
        color="primary"
        icon={<FaPlus size={10} />}
        onClick={handleClickAddEmployee}
      >
        Adicionar Funcionário
      </AddEmployeeBtn>

      <Flex
        gap="large"
        justify="space-between"
        align="center"
        style={{ marginTop: '1rem' }}
        wrap="wrap"
      >
        <FlexContainerBtns gap="large" align="center" wrap="wrap">
          <Button
            variant="outlined"
            color="primary"
            size="large"
            disabled={onlyActives}
            onClick={handleClickFilter}
          >
            Ver apenas ativos
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            disabled={!onlyActives}
            onClick={handleClickFilter}
          >
            Limpar Filtros
          </Button>
        </FlexContainerBtns>

        <Typography.Text style={{ fontSize: '1rem', fontWeight: '500' }}>
          Ativos {result?.filter((item) => item.status).length ?? 0}/
          {result?.length ?? 0}
        </Typography.Text>
      </Flex>

      {isLoadingEmployees ? (
        <Flex justify="center" align="center" style={{ marginTop: '3rem' }}>
          <Typography.Title level={4}>
            Carregando funcionários...
          </Typography.Title>
        </Flex>
      ) : (
        <Flex
          vertical
          justify="center"
          gap="large"
          style={{ marginTop: '3rem' }}
        >
          {!!employees &&
            employees.map((employee) => (
              <CardEmployee
                key={employee.id}
                vertical
                gap="0.25rem"
                status={employee.status ? 'Ativo' : 'Inativo'}
                wrap="wrap"
              >
                <Typography.Text className="name-user">
                  {employee.name}
                </Typography.Text>
                <Flex gap="small" wrap="wrap" style={{ marginRight: '2rem' }}>
                  <CustomTag>{mask(employee.cpf, '999.999.999-99')}</CustomTag>
                  <CustomTag>{employee.status ? 'Ativo' : 'Inativo'}</CustomTag>
                  <CustomTag>{employee.role}</CustomTag>
                </Flex>

                <CustomDropdown
                  menu={{
                    items: [
                      {
                        label: 'Alterar',
                        key: '1',
                        onClick: () => handleClickEditEmployee(employee.id),
                      },
                      {
                        type: 'divider',
                      },
                      {
                        label: 'Excluir',
                        key: '2',
                        onClick: () => handleClickDeleteEmployee(employee.id),
                      },
                    ],
                  }}
                  trigger={['click']}
                  placement="bottom"
                  arrow
                >
                  <FaEllipsisH size={20} />
                </CustomDropdown>
              </CardEmployee>
            ))}
        </Flex>
      )}

      <SwitchContainer justify="end" align="center" gap="0.75rem">
        <label>A etapa está concluída?</label>
        <Switch
          checkedChildren="Sim"
          unCheckedChildren="Não"
          checked={isCompleted}
          onChange={(e) => handleChangeSwitch(e)}
        />
      </SwitchContainer>
    </Container>
  )
}
