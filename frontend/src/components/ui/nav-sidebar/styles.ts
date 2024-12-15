import { Menu } from 'antd'
import styled from 'styled-components'

export const CustomMenu = styled(Menu)`
  position: relative;

  background-color: ${(props) => props.theme.colors.primaryColor};
  height: 75vh;
  border-start-end-radius: 1.25rem;
  border-end-end-radius: 1.25rem;

  padding-right: 0.4rem;
  padding-left: 0.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  li {
    background-color: ${(props) => props.theme.colors['gray-100']};
    color: ${(props) => props.theme.colors.primaryColor} !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    overflow: visible !important;

    padding: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;

    span {
      display: none !important;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.white} !important;
    }

    &::before {
      content: '';
      display: none;
      width: 3px;
      height: 100%;
      background-color: ${(props) => props.theme.colors.white};

      position: absolute;
      top: 0;
      left: -10px;
    }

    &.ant-menu-item-selected {
      background-color: ${(props) => props.theme.colors.white};
    }

    &.ant-menu-item-selected::before {
      display: block;
    }
  }
`
