import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.base.background};
    color: ${(props) => props.theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family:  ${(props) => props.theme.fonts.family.text}, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3 {
    font-family: ${(props) => props.theme.fonts.family.header}, sans-serif;
  }

  input {
    height: 2.625rem;
    background: ${(props) => props.theme.colors.base.input};

    border: 1px solid ${(props) => props.theme.colors.base.button};
    border-radius: 4px;
    padding: 0.75rem;

    font: ${(props) => props.theme.fonts.text.sm.regular};
    color: ${(props) => props.theme.colors.base.text};
    
    ::placeholder, :-ms-input-placeholder, ::-ms-input-placeholder  {
      color: ${(props) => props.theme.colors.base.label};
    }

    &:focus, &:focus-visible, &:focus-within {
      outline-color: ${(props) => props.theme.colors.brand.yellow.dark};
    }
  }
`
