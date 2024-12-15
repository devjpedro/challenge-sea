import { Card } from 'antd'
import styled from 'styled-components'

export const ContainerSideContent = styled(Card)`
  flex: 1;

  background-color: ${(props) => props.theme.colors.white};
  padding: 0 !important;
  box-shadow: ${(props) => props.theme.shadows['shadow-1']};
  border-radius: 16px;

  div {
    font-size: 1rem !important;
    line-height: 1.35;

    color: ${(props) => props.theme.colors['gray-300']};
  }

  img {
    display: block;
    height: 100%;
    border-radius: 12px;
    margin-top: 1rem;
  }

  .ant-card-body {
    padding: 1.5rem !important;
  }

  @media (max-width: 575px) {
    padding: 0;
  }
`
