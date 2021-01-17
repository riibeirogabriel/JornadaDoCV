import styled, { css } from 'styled-components';

export const Title = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.color.black};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.semiBold};
    margin-bottom: ${theme.spacing.normal};
  `}
`;
