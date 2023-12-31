import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 100%;
  width: 100%;
  padding: 0 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_900};
  border-bottom: 2px solid ${({ theme }) => theme.colors.background_600};

  @media screen and (max-width: 490px) {
    padding: 0 1.4rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.white_100};

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.2rem;
    font-size: 1.4rem;

    span {
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;

export const Image = styled(Link)`
  img {
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 50%;
    user-select: none;
  }
`;

export const Logout = styled.button`
  background: none;
  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 2.6rem;
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
