import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.normal};

    & > p {
      height: 18px;
      margin: ${theme.spacing.xsmall} ${theme.spacing.xxsmall};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing.small};
    border-radius: 25px;
    border: 1px solid ${theme.color.lightBlack};

    &:focus{
      border: 1px solid ${theme.color.primary};
    }
  `}
`;
