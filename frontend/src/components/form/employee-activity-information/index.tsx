import { Button, Checkbox, Flex, Input, Select, Typography } from 'antd'
import { useFormContext } from 'react-hook-form'
import { FormItem } from 'react-hook-form-antd'

import type { EmployeeForm } from '../../../validations/employee-schema'
import {
  CustomLabel,
  EmployeeActivityContainer,
  RemoveIcon,
  SelectActivityContainer,
} from './styled'

type Epi = {
  selectedEPI: string
  caNumber: string
}

type Activity = {
  activityName: string
  epis: Epi[]
}

export function EmployeeActivityInformationForm({
  useEpi,
  setUseEpi,
  isEdit = false,
}: {
  useEpi: boolean
  setUseEpi: (value: boolean) => void
  isEdit?: boolean
}) {
  const { control, watch, setValue } = useFormContext<EmployeeForm>()

  const activites = watch('activities')

  const handleAddActivity = () => {
    if (!activites) return

    const newActivity: Activity = {
      activityName: '',
      epis: [
        {
          selectedEPI: '',
          caNumber: '',
        },
      ],
    }

    setValue('activities', [...activites, newActivity])
  }

  const handleRemoveActivity = (activityIndex: number) => {
    if (!activites) return

    const updatedActivities = activites.filter(
      (_, index) => index !== activityIndex,
    )

    setValue('activities', updatedActivities)
  }

  const handleAddEpi = (activityIndex: number) => {
    if (!activites) return

    const newEpi: Epi = {
      selectedEPI: '',
      caNumber: '',
    }

    const updatedActivities = [...activites]

    if (!updatedActivities[activityIndex].epis) return

    updatedActivities[activityIndex].epis.push(newEpi)

    setValue('activities', updatedActivities)
  }

  const handleRemoveEpi = (activityIndex: number, epiIndex: number) => {
    if (!activites) return

    const updatedActivities = [...activites]

    if (!updatedActivities[activityIndex].epis) return

    updatedActivities[activityIndex].epis = updatedActivities[
      activityIndex
    ].epis.filter((_, index) => index !== epiIndex)

    setValue('activities', updatedActivities)
  }

  const resetActivities = () => {
    if (isEdit) return

    setValue('activities', [
      {
        activityName: '',
        epis: [
          {
            selectedEPI: '',
            caNumber: '',
          },
        ],
      },
    ])
  }

  return (
    <EmployeeActivityContainer vertical gap="1.5rem">
      <Flex vertical gap="0.875rem" wrap="wrap">
        <Typography.Title level={5}>
          Quais EPIs o trabalhador usa na atividade?
        </Typography.Title>

        <Checkbox
          checked={useEpi}
          onChange={(event) => {
            setUseEpi(event.target.checked)

            resetActivities()
          }}
        >
          O trabalhador não usa EPI.
        </Checkbox>
      </Flex>

      {!useEpi && !!activites?.length && (
        <>
          <Flex vertical gap="large">
            {activites.map((activity, index) => (
              <SelectActivityContainer key={index} vertical gap="1rem">
                {index > 0 && (
                  <RemoveIcon onClick={() => handleRemoveActivity(index)} />
                )}

                <Flex vertical>
                  <CustomLabel htmlFor="activity">
                    Selecione a atividade:
                  </CustomLabel>
                  <FormItem
                    control={control}
                    name={`activities.${index}.activityName`}
                  >
                    <Select
                      size="large"
                      placeholder="Atividade"
                      id="activity"
                      options={[
                        { value: 'Atividade 1', label: 'Atividade 1' },
                        { value: 'Atividade 2', label: 'Atividade 2' },
                        { value: 'Atividade 3', label: 'Atividade 3' },
                        { value: 'Atividade 4', label: 'Atividade 4' },
                        { value: 'Atividade 5', label: 'Atividade 5' },
                      ]}
                    />
                  </FormItem>
                </Flex>

                {!!activity.epis &&
                  activity.epis.map((_, epiIndex) => (
                    <Flex key={epiIndex} gap="2rem" align="end" wrap="wrap">
                      <Flex vertical style={{ flex: 1 }}>
                        <CustomLabel htmlFor="epi">
                          Selecione o EPI:
                        </CustomLabel>
                        <FormItem
                          control={control}
                          name={`activities.${index}.epis.${epiIndex}.selectedEPI`}
                        >
                          <Select
                            size="large"
                            placeholder="Selecione o EPI"
                            id="epi"
                            options={[
                              {
                                value: 'Capacete de Segurança',
                                label: 'Capacete de Segurança',
                              },
                              {
                                value: 'Óculos de Segurança',
                                label: 'Óculos de Segurança',
                              },
                              {
                                value: 'Protetor Auricular',
                                label: 'Protetor Auricular',
                              },
                              { value: 'Respirador', label: 'Respirador' },
                              {
                                value: 'Luva de Segurança',
                                label: 'Luva de Segurança',
                              },
                              {
                                value: 'Botina de Segurança',
                                label: 'Botina de Segurança',
                              },
                              {
                                value: 'Avental de Proteção',
                                label: 'Avental de Proteção',
                              },
                              {
                                value: 'Cinto de Segurança',
                                label: 'Cinto de Segurança',
                              },
                              {
                                value: 'Máscara de Solda',
                                label: 'Máscara de Solda',
                              },
                              {
                                value: 'Viseira Facial',
                                label: 'Viseira Facial',
                              },
                            ]}
                          />
                        </FormItem>
                      </Flex>

                      <Flex vertical style={{ flex: 1 }}>
                        <CustomLabel htmlFor="caNumber">
                          Informe o número do CA:
                        </CustomLabel>
                        <FormItem
                          control={control}
                          name={`activities.${index}.epis.${epiIndex}.caNumber`}
                        >
                          <Input placeholder="Número do CA" id="caNumber" />
                        </FormItem>
                      </Flex>

                      {!!activity.epis &&
                        epiIndex < activity.epis.length - 1 && (
                          <Button
                            style={{
                              flex: 1,
                            }}
                            size="large"
                            variant="outlined"
                            color="primary"
                            onClick={() => handleRemoveEpi(index, epiIndex)}
                          >
                            Excluir EPI
                          </Button>
                        )}

                      {!!activity.epis &&
                        epiIndex === activity.epis.length - 1 && (
                          <Button
                            style={{
                              flex: 1,
                            }}
                            size="large"
                            variant="outlined"
                            color="primary"
                            onClick={() => handleAddEpi(index)}
                          >
                            Adicionar EPI
                          </Button>
                        )}
                    </Flex>
                  ))}
              </SelectActivityContainer>
            ))}
          </Flex>

          <Button
            style={{ flex: 1 }}
            size="large"
            variant="outlined"
            color="primary"
            onClick={handleAddActivity}
          >
            Adicionar outra atividade
          </Button>
        </>
      )}
    </EmployeeActivityContainer>
  )
}
