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

  background: ${(props) => props.theme.color.BACKGROUND};
  border-radius: 1.6rem;
  border: 0.26rem solid ${(props) => props.theme.color.MAIN_BLUE};

  width: 80vw;
`;

export const StepButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.BACKGROUND};
  border-radius: 1.6rem;
  border: 0.26rem solid ${(props) => props.theme.color.PURPLE};

  width: 80vw;
`;

export const ButtonInnerText = styled.p`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};
  padding: 1.2rem;
`;

export const StepButtonInnerText = styled.p`
  color: ${(props) => props.theme.color.PURPLE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};
  padding: 1.2rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};

  width: 80%;
  margin-top: 1.8rem;
  text-align: center;
`;

export const BR = styled.div`
  margin: 2.2rem;
`;

export const ReQRWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  bottom: 15%;
  width: 100%;
`;

export const ReQRLable = styled.div`
  color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};

  margin-bottom: 1rem;
  text-align: center;
`;

export const ReQRLinker = styled.p`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};
  text-decoration: underline;
  text-decoration-thickness: 0.14rem;
`;
