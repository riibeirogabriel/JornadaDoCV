import styled, { css } from 'styled-components';

export const SignIn = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    margin: ${theme.spacing.normal} 0;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 50px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: ${theme.spacing.normal} 0;
  `}
`;
