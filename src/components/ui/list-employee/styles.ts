import { Button, Card, Dropdown, Flex, Tag } from 'antd'
import styled from 'styled-components'

interface CardEmployeeProps {
  status: string
}

export const ListContainer = styled(Card)`
  flex: 2;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows['shadow-1']};
  border: 0;
  border-radius: 16px !important;

  & .ant-card-head {
    border-start-start-radius: 16px !important;
    border-start-end-radius: 16px !important;

    background-color: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.white};

    font-size: 1.75rem;
    font-weight: 400;
  }
`

export const AddEmployeeBtn = styled(Button)`
  width: 100%;
  padding: 2rem 0.75rem;
  border-radius: 0.625rem;

  font-size: 1rem;
`

export const FlexContainerBtns = styled(Flex)`
  flex: 1;

  button {
    max-width: 15rem;
    width: 100%;
    border-radius: 10px;

    &:disabled {
      background-color: transparent !important;
    }
  }
`

export const CardEmployee = styled(Flex)<CardEmployeeProps>`
  position: relative;

  background-color: ${(props) =>
    props.status === 'Ativo'
      ? props.theme.colors.primaryColorLight
      : props.theme.colors['gray-100']};

  padding: 1rem;

  border-radius: 10px;

  .name-user {
    color: ${(props) => props.theme.colors['gray-500']};
    font-size: 1.5rem;
    font-weight: 500;
  }
`

export const CustomTag = styled(Tag)`
  border-radius: 999px;
  padding: 0.15rem 1rem;

  font-size: 0.75rem;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primaryColor};

  border: 0;
`

export const CustomDropdown = styled(Dropdown)`
  max-width: 3.25rem !important;
  width: 100% !important;
  height: 100%;

  padding: 1rem;

  position: absolute;
  top: 0;
  right: 0;

  font-size: 20px !important;

  border-radius: 0 10px 10px 0;

  border: 0;

  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
