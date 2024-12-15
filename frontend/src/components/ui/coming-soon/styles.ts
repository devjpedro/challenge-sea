import { Flex } from 'antd'
import styled from 'styled-components'

interface ComingSoonContainerProps {
  layout: 'blank' | 'dashboard'
}

export const ComingSoonContainer = styled(Flex)<ComingSoonContainerProps>`
  width: 100%;
  flex: 2;
  background-color: ${(props) => props.theme.colors.primaryColor};

  padding: 1rem;

  border-radius: 20px;

  h2 {
    margin: 0;
    color: ${(props) => props.theme.colors.white};
    font-weight: 400;
  }

  ${(props) =>
    props.layout === 'blank' &&
    `
    margin: 1.5rem 2rem 0 5.75rem;

    @media (max-width: 768px) {
      margin: 4rem 1.25rem !important;
    }
  `}
`
