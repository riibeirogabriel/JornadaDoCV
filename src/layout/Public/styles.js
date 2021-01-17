import styled, { css } from 'styled-components';

export const Public = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    padding: ${theme.spacing.normal};
    overflow-y: scroll;
  `}
`;
