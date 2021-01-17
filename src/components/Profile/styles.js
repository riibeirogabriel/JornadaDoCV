import styled, { css } from 'styled-components';

export const Profile = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacing.normal};
    margin-top: 160px;
    height: calc(100vh - 216px);
    overflow-y: scroll;

    & .header {
      position: fixed;
      top: 0;
      left: 0;

      .header-content {
        display: flex;
        align-items: center;
        padding: ${theme.spacing.medium} ${theme.spacing.normal};

        & > img {
          width: 96px;
          height: 96px;
          border-radius: 50%;
        }
        & > .welcome {
          padding-left: ${theme.spacing.normal};
          
          p {
            color: ${theme.color.white};

            &:nth-child(1) {
              font-size: ${theme.font.size.medium};
              font-weight: ${theme.font.weight.bold};
            }

            &:nth-child(2) {
              font-size: ${theme.font.size.small};
              font-weight: ${theme.font.weight.regular};
            }
          }
        }
      }
    }
      
  `}
`;

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin-top: ${theme.spacing.normal};

    & > .card-container {
      padding-bottom: 1px;
    }
  `}
`;
