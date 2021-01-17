import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    width: ${`calc(100% - 2 * ${theme.spacing.xsmall})`};
    padding: ${theme.spacing.normal};
    margin: ${theme.spacing.xsmall};
    border-radius: 25px;
    border: 1px solid ${theme.color.lightBlack};

    &:focus{
      border: 1px solid ${theme.color.primary};
    }
  `}
`;
