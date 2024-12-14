import { Button, Input, Typography, Upload, type UploadFile } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import { Controller, useFormContext } from 'react-hook-form'
import { FaPaperclip } from 'react-icons/fa'

import { defaultTheme } from '../../../styles/defaultTheme'
import type { EmployeeForm } from '../../../validations/employee-schema'
import { EmployeeActivityContainer } from './styled'

export function EmployeeHealthCertificateForm() {
  const { control, setValue, watch } = useFormContext<EmployeeForm>()
  const fileName = watch('healthCertificate')?.name || ''

  const uploadProps = {
    beforeUpload: (file: File) => {
      setValue('healthCertificate', file) // Salva o arquivo no form context
      return false
    },
    onChange: (info: UploadChangeParam<UploadFile>) => {
      console.log(info.fileList)
    },
  }

  return (
    <EmployeeActivityContainer vertical gap="1.5rem">
      <Typography.Title level={5}>
        Adicione Atestado de Saúde (opcional):
      </Typography.Title>

      <Controller
        name="healthCertificate"
        control={control}
        rules={{
          validate: {
            fileRequired: (value) => (value ? true : 'Selecione um arquivo'),
          },
        }}
        render={({ field, fieldState }) => (
          <>
            <Input
              {...field}
              value={fileName}
              placeholder="Nenhum arquivo selecionado"
              readOnly
              suffix={
                <FaPaperclip
                  color={defaultTheme.colors['gray-300']}
                  size={16}
                />
              }
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
            {fieldState?.error && (
              <Typography.Text type="danger">
                {fieldState.error.message}
              </Typography.Text>
            )}
          </>
        )}
      />
    </EmployeeActivityContainer>
  )
}
