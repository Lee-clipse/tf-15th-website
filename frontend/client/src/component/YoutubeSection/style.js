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
  padding: 4rem 0rem 13rem 0rem;
`;

export const SectionLogo = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};

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

export const Section = styled.a``;

export const Thumbnail = styled.img`
  width: 90vw;

  & > iframe {
    width: 100%;
    height: 50vw;
  }
`;

export const SectionLabel = styled.p`
  color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.SM};

  margin-top: 4vh;
`;
