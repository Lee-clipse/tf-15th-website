import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
  background: ${(props) => props.theme.color.SOFT_BLUE};
  padding: 4rem 0rem 4rem 0rem;

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
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.SMALL};

  margin-bottom: 2.4vh;
`;

export const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.SMALL};
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
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.MEDIUM};
  padding: 1.4rem;
  margin-top: 2rem;
`;

export const AnnouncementWrapper = styled.div`
  padding: 1.4rem;
`;

export const AnnouncmentContent = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.SMALL};

  line-height: 140%;
`;
