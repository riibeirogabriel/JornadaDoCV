import styled, { css } from 'styled-components';

export const Public = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacing.normal};
  `}
`;
