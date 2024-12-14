import { Flex } from 'antd'
import { FaX } from 'react-icons/fa6'
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

  .ant-select-status-error .ant-select-selector {
    border-color: ${(props) => props.theme.colors['red-500']} !important;
  }

  .ant-checkbox-inner {
    border-color: ${(props) => props.theme.colors.primaryColor} !important;
  }

  .ant-checkbox-wrapper span {
    font-size: 1rem;
  }

  .ant-select-status-error {
    /* border-color: ${(props) => props.theme.colors['red-500']} !important; */
  }

  .ant-form-item {
    margin-bottom: 0px;
  }

  .ant-form-item-explain {
    margin-bottom: 0.875rem;
    margin-left: 0.25rem;
    margin-top: 0.125rem;

    display: none !important;
  }
`

export const SelectActivityContainer = styled(Flex)`
  position: relative;

  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  box-shadow: ${(props) => props.theme.shadows['shadow-2']};
`
export const RemoveIcon = styled(FaX)`
  align-self: flex-end;
  color: ${(props) => props.theme.colors.primaryColor};
  cursor: pointer;
`

export const CustomLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`
