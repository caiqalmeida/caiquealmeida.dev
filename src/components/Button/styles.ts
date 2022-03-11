import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 14.5px 75.5px;
    border-radius: ${theme.borders.radius.lg};
    background: ${theme.colors.gradient};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-in-out;
    transform: translate(0 0);

    font-size: ${theme.font.size.sm};
    font-weight: ${theme.font.weight.semibold};

    &:hover {
      filter: brightness(0.85);
      transform: translate(0, -2px);
    }
  `}
`
