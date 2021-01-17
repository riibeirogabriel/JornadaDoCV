import styled, { css } from 'styled-components';

export const SignUp = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: ${theme.spacing.normal} 0;
  `}
`;
