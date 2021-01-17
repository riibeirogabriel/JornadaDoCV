import styled, { css } from 'styled-components';

export const Description = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.color.lightBlack};
    font-size: ${theme.font.size.xsmall};
  `}
`;
