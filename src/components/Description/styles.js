import styled, { css } from 'styled-components';

export const Description = styled.p`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: ${theme.color.lightBlack};
    font-size: ${theme.font.size.xsmall};

    &.right {
      justify-content: flex-start;
    }
  `}
`;
