import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {bottom: -32px; opacity: 0;}
  to {bottom: 0; opacity: 1;}
`;

const fadeOut = keyframes`
  from {bottom: 0; opacity: 1;}
  to {bottom: -32px; opacity: 0;}
`;

export const Snackbar = styled.div`
  ${({ theme, time }) => css`
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;

    &.show {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      animation: ${fadeIn} 0.5s, ${fadeOut} 0.6s ${`${time}s`};
    }

    & > .container {
      text-align: center;
      max-width: max-content;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
      color: white;
      border-radius: 4px;
      padding: ${theme.spacing.normal};
      margin: ${theme.spacing.medium};

      &.success {
        background-color: ${theme.color.success};
      }
      &.warning {
        background-color: ${theme.color.yellow};
      }
      &.error {
        background-color: ${theme.color.error};
      }
    }
  `}
`;
