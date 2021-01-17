import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: ${theme.spacing.large};

      & > svg{
        margin: ${theme.spacing.large} 0;
      }
    }
  `}
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
