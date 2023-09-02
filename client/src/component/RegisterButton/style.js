import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 5%;
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;
  background: ${(props) => props.theme.color.MAIN_BLUE};
  box-shadow: 0.3rem 0.3rem 0.8rem rgb(0 0 0 / 0.6);

  width: 80vw;
`;

export const ButtonText = styled.div`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.MEDIUM};
  padding: 1.4rem;
`;
