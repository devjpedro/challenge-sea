import { Button, Flex, Input, Typography, Upload, type UploadFile } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import { Controller, useFormContext } from 'react-hook-form'
import { FaPaperclip } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

import { defaultTheme } from '../../../styles/defaultTheme'
import type { EmployeeForm } from '../../../validations/employee-schema'
import { EmployeeActivityContainer } from './styles'

export function EmployeeHealthCertificateForm() {
  // Hooks
  const { setValue, control } = useFormContext<EmployeeForm>()

  // Funcs
  const uploadProps = {
    beforeUpload: () => {
      return false
    },
    onChange: (info: UploadChangeParam<UploadFile>) => {
      setValue('healthCertificate', info.fileList[0].name)
    },
  }

  return (
    <EmployeeActivityContainer vertical gap="1.5rem">
      <Typography.Title level={5}>
        Adicione Atestado de Saúde (opcional):
      </Typography.Title>

      <>
        <Controller
          control={control}
          name="healthCertificate"
          render={({ field }) => (
            <Input
              value={field.value}
              placeholder="Nenhum arquivo selecionado"
              readOnly
              suffix={
                <Flex align="center" gap="1rem" justify="end">
                  <FaPaperclip
                    color={defaultTheme.colors['gray-300']}
                    size={16}
                  />

                  {field.value && (
                    <FaX
                      style={{ cursor: 'pointer' }}
                      onClick={() => setValue('healthCertificate', '')}
                      color={defaultTheme.colors['gray-300']}
                      size={16}
                    />
                  )}
                </Flex>
              }
            />
          )}
        />
        <Upload {...uploadProps} showUploadList={false}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            style={{ flex: 1, width: '100%' }}
          >
            Selecionar arquivo
          </Button>
        </Upload>
      </>
    </EmployeeActivityContainer>
  )
}
