import { Button, Input, Typography, Upload, type UploadFile } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import { useState } from 'react'
import { FaPaperclip } from 'react-icons/fa'

import { defaultTheme } from '../../../styles/defaultTheme'
import { EmployeeActivityContainer } from './styled'

export function EmployeeHealthCertificateForm() {
  const [fileName, setFileName] = useState('')

  const uploadProps = {
    beforeUpload: (file: File) => {
      setFileName(file.name)
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

      <Input
        value={fileName}
        placeholder="Nenhum arquivo selecionado"
        readOnly
        suffix={
          <FaPaperclip color={defaultTheme.colors['gray-300']} size={16} />
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
    </EmployeeActivityContainer>
  )
}
