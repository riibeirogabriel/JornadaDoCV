import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
  ${({ theme }) => css`
    background-color: transparent;
    background-image: ${theme.color.backgroundPrimary};
    width: 110vw;
    border-bottom-right-radius: 200px;
  `}
`;
