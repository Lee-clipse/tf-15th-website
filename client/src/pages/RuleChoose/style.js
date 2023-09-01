import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

export const ParticipantButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.MAIN_BLUE};
  border-radius: 2rem;
  box-shadow: 0.3rem 0.3rem 0.8rem rgb(0 0 0 / 0.6);

  width: 86vw;
`;

export const StepButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.PURPLE};
  border-radius: 2rem;
  box-shadow: 0.3rem 0.3rem 0.8rem rgb(0 0 0 / 0.6);

  width: 86vw;
`;

export const ButtonInnerText = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.LARGE};
  padding: 1.4rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.MEDIUM};

  width: 80%;
  margin-top: 1.8rem;
  text-align: center;
`;

export const BR = styled.div`
  margin: 2.2rem;
`;
