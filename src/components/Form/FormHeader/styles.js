import styled, { css } from 'styled-components';

export const FormHeader = styled.header`
  ${({ theme, width }) => css`
    position: fixed;
    width: 100vw;
    background-color: white;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing.normal};

    & > .progress-container {
      width: 128px;
      height: 16px;
      border-radius: 16px;
      background-color: ${theme.color.gray};
      overflow: hidden;

      & > .progress-content {
        width: ${width}%;
        height: 100%;
        border-radius: 16px;
        background-image: ${theme.color.backgroundPrimary};
        transition: all 1s;
      }
    }
  `}
`;
