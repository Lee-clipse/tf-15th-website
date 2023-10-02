import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background: ${(props) => props.theme.color.TEXT_WHITE};

  width: 80vw;
  height: 56vh;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-bottom: 2rem;
`;
export const CloseButtonWrapper = styled.div`
  justify-content: right;
  width: 8%;
`;
export const CloseButton = styled.img`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  display: inline-block;

  width: 100%;
  height: 80%;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-left: 1rem;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.ML};

  margin-bottom: 0.6rem;
  text-align: left;
`;
export const BR = styled.div`
  margin: 2.2rem;
`;
export const Input = styled.input`
  color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.ML};
  line-height: 220%;
  background: ${(props) => props.theme.color.TEXT_WHITE};

  width: 90%;
  margin-top: 1rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubmitButton = styled.button`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
  background: ${(props) => props.theme.color.BACKGROUND};
  border-radius: 1.2rem;
  border: 0.26rem solid ${(props) => props.theme.color.MAIN_BLUE};
  padding: 0.8rem;
  width: 90%;
`;
