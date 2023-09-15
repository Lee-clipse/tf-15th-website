import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;

  margin-bottom: 12rem;
`;

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 1.2rem;
  box-shadow: 0.1rem 0.3rem 0.6rem rgb(0 0 0 / 0.6);

  padding: 2rem;

  width: 80%;
  background: ${(props) => props.theme.color.MAIN_BLUE};
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};
  margin-bottom: 2.6rem;
`;

export const TimerDayText = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXXL};
  margin-bottom: 1rem;
`;
export const TimerText = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXXL};
`;

export const MeetText = styled.p`
  margin-top: 2.6rem;
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};
`;
