import styled, { css } from 'styled-components';

export const ButtonBottom = styled.div`
  ${({ theme }) => css`
    all: unset;
    display: flex;
    position: fixed;
    width: ${`calc(100vw  - 2 * ${theme.spacing.normal})`};
    bottom: 0;
    left: 0;
    padding: ${theme.spacing.normal};
    justify-content: space-between;
    background-color: ${theme.color.primary};
    color: ${theme.color.white};

    &.center {
      justify-content: center;
    }
  `}
`;
