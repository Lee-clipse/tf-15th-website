import styled from "styled-components";

export const LinkerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

export const LinkerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.color.SOFT_BLUE};
  padding: 4rem 0rem 4rem 0rem;
`;

export const LinkerLogo = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.LARGE};

  margin-bottom: 4rem;
`;

export const LinkerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80vw;
  margin-bottom: 2rem;
  border-radius: 1rem;

  box-shadow: 0.1rem 0.3rem 0.6rem rgb(0 0 0 / 0.4);
`;

export const LinkerImageWrapper = styled.div`
  width: 100%;
  height: 12vh;
  background: ${(props) => props.theme.color.TEXT_WHITE};
  border-radius: 1rem 1rem 0rem 0rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkerImage = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: 1rem 1rem 0rem 0rem;
`;

export const LinkerLabelWrapper = styled.div`
  background: ${(props) => props.theme.color.MAIN_BLUE};
  width: 100%;
  padding: 1rem 1.2rem 1rem 1.2rem;
  border-radius: 0rem 0rem 1rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const LinkerLabel = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.SMALL};
`;

export const LinkerArrow = styled.img``;
