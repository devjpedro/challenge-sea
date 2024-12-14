import { Flex } from 'antd'
import styled from 'styled-components'

export const EmployeeActivityContainer = styled(Flex)`
  width: 100%;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  box-shadow: ${(props) => props.theme.shadows['shadow-2']};
  margin-top: 1rem;

  input {
    height: 2.5rem !important;

    border-color: ${(props) => props.theme.colors.primaryColor};
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  h5 {
    margin-bottom: 0 !important;
  }

  .ant-select {
    width: 100%;
  }

  .ant-select-selector {
    border-color: ${(props) => props.theme.colors.primaryColor} !important;
    border-radius: 10px !important;
    font-size: 1rem !important;
    height: 2.5rem !important;
  }

  .ant-checkbox-inner {
    border-color: ${(props) => props.theme.colors.primaryColor} !important;
  }

  .ant-checkbox-wrapper span {
    font-size: 1rem;
  }
`

export const SelectActivityContainer = styled(Flex)`
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  box-shadow: ${(props) => props.theme.shadows['shadow-2']};
`

export const CustomLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`
