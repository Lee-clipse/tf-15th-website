import styled from "styled-components";

export const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.BACKGROUND};
  box-shadow: 0px 0.2rem 0.3rem rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding: 1.8rem 0rem 1.8rem 0rem;
  z-index: 1000;
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
`;

export const BackButton = styled.img`
  width: 0.8rem;
  margin-left: 2.4rem;
`;

export const CenterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-right: 3.2rem;
`;

export const CenterText = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};
`;
