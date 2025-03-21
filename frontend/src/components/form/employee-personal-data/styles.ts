import { Flex } from 'antd'
import styled from 'styled-components'

export const EmployeeInformationContainer = styled(Flex)`
  width: 100%;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  box-shadow: ${(props) => props.theme.shadows['shadow-2']};
  margin-top: 1rem;

  input,
  .ant-picker {
    height: 2.875rem !important;

    border-color: ${(props) => props.theme.colors.primaryColor};
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  .ant-radio-wrapper {
    font-size: 1rem;
  }

  .ant-radio-inner {
    border-color: ${(props) => props.theme.colors.primaryColor};
  }

  .ant-row {
    width: 100%;
  }

  .ant-select {
    width: 100%;
  }

  .ant-select-selector {
    border-color: ${(props) => props.theme.colors.primaryColor} !important;
    border-radius: 10px !important;
    font-size: 1rem !important;
    height: 2.875rem !important;
  }

  .ant-select-status-error .ant-select-selector {
    border-color: ${(props) => props.theme.colors['red-500']} !important;
  }

  .ant-form-item-explain {
    margin-bottom: 0.875rem;
    margin-left: 0.25rem;
    margin-top: 0.125rem;
  }

  @media (max-width: 768px) {
    align-items: center;
    padding: 0;
  }
`

export const CustomLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.625rem;

  @media (max-width: 575px) {
    margin-top: 12px;
  }
`
