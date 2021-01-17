import styled, { css } from 'styled-components';

export const LinkButton = styled.div`
  ${({ theme }) => css`
    all: unset;
    font-weight: ${theme.font.weight.regular};
    color: ${theme.color.primary};
  `}
`;
