import styled, { css } from 'styled-components';

export const Journey = styled.div`
  ${({ theme }) => css`
    & > .question-journey {
      padding: ${theme.spacing.normal} 0;
      font-weight: ${theme.font.weight.bold};
      padding-bottom: ${theme.spacing.medium};
    }

    & > .checkbox-container {
      margin-bottom: ${theme.spacing.medium};
      display: flex;
      align-items: center;
      justify-content: center;
      display: block;
      position: relative;
      padding-left: 35px;
      cursor: pointer;
      font-size: ${theme.font.size.small};
      color: ${theme.color.lightBlack};
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      & > input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      & > .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;

        &:after {
          content: "";
          position: absolute;
          display: none;
        }
      }

      & .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      & input:checked ~ .checkmark {
        background-color: ${theme.color.primary};

        &:after {
          display: block;
        }
      }


    }


  `}
`;
