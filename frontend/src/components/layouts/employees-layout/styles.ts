import { Button, Layout } from 'antd'
import styled from 'styled-components'

export const ContentLayout = styled(Layout)`
  padding: 2rem;
  margin-left: 3.75rem;
  height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 4rem;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }
`

export const CustomHeader = styled(Layout.Header)`
  padding: 1.5rem 1.25rem !important;
  height: auto !important;
  box-shadow: ${(props) => props.theme.shadows['shadow-1']};
  border-radius: 16px;
`

export const CustomContent = styled(Layout.Content)`
  margin-top: 2rem;
  display: flex;
  align-items: start;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const StepBtn = styled(Button)`
  max-width: 12.5rem;
  width: 100%;
  border-radius: 10px;
`
