import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
  background: ${(props) => props.theme.color.SOFT_BLUE};
  padding: 8rem 0rem 4rem 0rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PlaneSectionWrapper = styled.div`
  margin-top: 1.4rem;
`;

export const SingleSectionWrapper = styled.div`
  padding: 2rem;
`;

export const SectionTitle = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};

  margin-bottom: 2.4vh;
`;

export const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};
`;

export const SubmitButton = styled.button`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: ${(props) => props.theme.color.MAIN_BLUE};
  box-shadow: 0.3rem 0.3rem 0.8rem rgb(0 0 0 / 0.6);

  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.ML};
  padding: 1.4rem;
  margin-top: 2rem;
`;

export const AnnouncementWrapper = styled.div`
  padding: 1.4rem;
`;

export const AnnouncmentContent = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};

  line-height: 140%;
`;

export const PinkHighlightText = styled.span`
  color: ${(props) => props.theme.color.PINK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};
  margin: 0rem 0.2rem 0rem 0.2rem;
`;
