import { Card, Flex } from 'antd'
import styled from 'styled-components'

export const Container = styled(Card)`
  flex: 2;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows['shadow-1']};
  border: 0;
  border-radius: 16px !important;

  & .ant-card-head {
    border-start-start-radius: 16px !important;
    border-start-end-radius: 16px !important;

    background-color: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.white} !important;

    font-size: 1.75rem !important;
    font-weight: 400 !important;

    .ant-typography {
      color: ${(props) => props.theme.colors.white} !important;
      font-size: 1.75rem !important;
      font-weight: 400 !important;
      margin: 0;
    }
  }
`
export const SwitchInputContainer = styled(Flex)`
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  box-shadow: ${(props) => props.theme.shadows['shadow-2']};

  label {
    font-size: 1rem;
    font-weight: 600;
  }

  .ant-switch-inner {
    background-color: ${(props) => props.theme.colors['gray-200']} !important;
    color: red !important;
  }

  .ant-switch-inner-checked,
  .ant-switch-inner-unchecked {
    color: #202020 !important;
  }

  .ant-switch-handle::before {
    background-color: ${(props) => props.theme.colors.primaryColor} !important;
  }
`
