import styled, { css } from 'styled-components'

export const Navbar = styled.nav`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;
  `}
`

export const Menu = styled.ul`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 124px;
  `}
`

export const MenuItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white.mediumDark};
    font-size: ${theme.font.size.xs};
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.white.light};
    }

    &.active {
      color: ${theme.colors.white.light};
      position: relative;

      &:before {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${theme.colors.gradient};
      }
    }
  `}
`
