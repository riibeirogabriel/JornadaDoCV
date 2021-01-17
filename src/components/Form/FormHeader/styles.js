import styled, { css } from 'styled-components';

export const FormHeader = styled.header`
  ${({ theme, width }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacing.medium};

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
