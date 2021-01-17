import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme, width, color }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.color.white};
    box-shadow: 2px 2px 10px #00000030;
    padding: ${theme.spacing.normal};
    margin-bottom: ${theme.spacing.medium} !important;
    border-radius: 8px;

    & > .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${theme.spacing.xsmall};

      & > .card-title {
        color: ${theme.color.black};
        font-weight: ${theme.font.weight.semiBold};
      }
    }

    

    & > .card-description {
      margin-bottom: ${theme.spacing.normal};
      color: ${theme.color.lightBlack};
    }

    & > .progress-bar {
      width: 100%;
      height: 8px;
      background-color: ${theme.color.gray};
      border-radius: 8px;

      & > .progress-bar-content {
        width: ${width}%;
        border-radius: 8px;
        height: 8px;
        background-color: ${color};
      }
    }
  `}
`;
