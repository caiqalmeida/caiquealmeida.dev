import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${props => props.theme.colors.purple.dark};
  }
  * {
    font-family: ${props => props.theme.font.family};
    color: ${props => props.theme.colors.white.medium};
  }
`;
