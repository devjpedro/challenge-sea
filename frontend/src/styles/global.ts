import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif !important;
  }

  body {
    background-color: ${(props) => props.theme.colors['gray-100']};
  }
`
