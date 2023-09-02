import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 80%;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.ML};

  margin-bottom: 0.6rem;
`;
export const BR = styled.div`
  margin: 2.2rem;
`;
export const Input = styled.input`
  color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.ML};
  line-height: 220%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.BACKGROUND};
  border-radius: 1.2rem;
  border: 0.26rem solid ${(props) => props.theme.color.MAIN_BLUE};

  width: 100%;
  margin-top: 1rem;
`;
export const SubmitButton = styled.button`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
  padding: 0.8rem;
`;
