import { styled } from "styled-components";

export const DefaultButton = styled.button`
  width: 100%;
  min-height: 5rem;
  margin-top: 2.5rem;

  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.background_700};

  border-radius: 10px;

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white_100};

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  transition: all 250ms;

  &:hover {
    background-color: #fb8332;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #c85000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    transform: translateY(0px);
  }
`;
