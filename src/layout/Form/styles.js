import styled, { css } from 'styled-components';

export const Form = styled.main`
  ${({ theme }) => css`
    padding-top: ${theme.spacing.large};
    padding-bottom: ${theme.spacing.medium};
  `}
`;
