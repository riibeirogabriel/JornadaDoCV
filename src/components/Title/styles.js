import styled, { css } from 'styled-components';

export const Title = styled.p`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: ${theme.color.black};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.semiBold};
    margin-bottom: ${theme.spacing.normal};

    &.right {
      justify-content: flex-start;
    }
  `}
`;
