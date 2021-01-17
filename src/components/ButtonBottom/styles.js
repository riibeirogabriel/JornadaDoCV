import styled, { css } from 'styled-components';

export const ButtonBottom = styled.button`
  ${({ theme }) => css`
    all: unset;
    display: flex;
    position: fixed;
    width: ${`calc(100vw  - 2 * ${theme.spacing.normal})`};
    bottom: 0;
    left: 0;
    padding: ${theme.spacing.normal};
    justify-content: space-between;
    background-color: ${theme.color.white};
    background-image: ${theme.color.backgroundPrimary};
    color: ${theme.color.white};

    &.center {
      justify-content: center;
    }
  `}
`;
