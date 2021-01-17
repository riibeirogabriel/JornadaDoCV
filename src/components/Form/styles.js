import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    margin: ${theme.spacing.medium} 0;
  `}
`;
