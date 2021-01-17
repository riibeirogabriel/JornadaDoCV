import styled, { css } from 'styled-components';

export const Onboarding = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;

    header {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      margin-bottom: 80px;

      & > svg {
        width: 100%;
        height: auto;
        margin-bottom: ${theme.spacing.medium};
      }
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.color.black};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.semiBold};
    margin-bottom: ${theme.spacing.normal};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.color.lightBlack};
    font-size: ${theme.font.size.xsmall};
  `}
`;

export const Bullets = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: ${theme.spacing.medium};
    position: fixed;
    bottom: 50px;

    & > div {
      width: ${theme.spacing.xsmall};
      height: ${theme.spacing.xsmall};
      margin: ${theme.spacing.xxsmall};
      border-radius: 100%;
      background-color: ${theme.color.gray};

      &.selected {
        background-color: ${theme.color.primary};
      }
    }
  `}
`;
