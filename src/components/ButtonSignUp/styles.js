import styled, { css } from 'styled-components';

export const ButtonSignUp = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    background-color: ${color || theme.color.primary};
    border-radius: 32px;
    height: 50px;
    box-shadow: 2px 2px 10px #00000030;
    margin: ${theme.spacing.xsmall};
    margin-top: ${color ? theme.spacing.large : theme.spacing.normal};

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${theme.color.white};
      box-shadow: 2px 2px 10px #00000020;
    }

    & > p {
      margin: 0 ${theme.spacing.normal};
      color: ${theme.color.white};
      color: ${color ? theme.color.lightBlack : theme.color.white};
      font-weight: ${theme.font.weight.medium};
    }
  `}
`;
