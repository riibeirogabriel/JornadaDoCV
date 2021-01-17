import styled, { css } from 'styled-components';

export const BottomBar = styled.button`
  ${({ theme }) => css`
    all: unset;
    height: 24px;
    display: flex;
    position: fixed;
    align-items: center;
    width: ${`calc(100vw  - 2 * ${theme.spacing.normal})`};
    bottom: 0;
    left: 0;
    padding: ${theme.spacing.normal};
    justify-content: space-between;
    background-color: ${theme.color.white};
    box-shadow: 2px 2px 10px #00000030;

    & > svg {
      width: 30%;
      height: 40px;

      &.selected path {
        fill: ${theme.color.primary};
      }
    }
  `}
`;
