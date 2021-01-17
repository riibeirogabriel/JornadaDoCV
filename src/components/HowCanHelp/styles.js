import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${theme.spacing.normal};
    margin-top: ${theme.spacing.xlarge};

    & > p {
      text-align: center;
      margin-bottom: ${theme.spacing.medium};
    }

    & > .item {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 10px #00000030;
      border-radius: 50px;
      margin: ${theme.spacing.normal} 0;
      padding: ${theme.spacing.normal};
    }
  `}
`;
