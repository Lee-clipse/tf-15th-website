import styled from "styled-components";

export const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.MAIN_BLUE};
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding: 1.6rem 0rem 1.6rem 0rem;
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
  margin-left: 1.4rem;
`;

export const CenterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-right: 2.4rem;
`;

export const CenterText = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
