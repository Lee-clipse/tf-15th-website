import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.color.TEXT_WHITE};
  padding: 4rem 0rem 10rem 0rem;
`;

export const SectionLogo = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.LARGE};

  margin-bottom: 4rem;
`;

export const SectionSlider = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 0rem 1.6rem;

  width: 100vw;
  white-space: nowrap;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SectionCard = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Section = styled.div`
  width: 90vw;

  & > iframe {
    width: 100%;
    height: 50vw;
  }
`;

export const SectionLabel = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.SMALL};

  margin-top: 4vh;
`;
