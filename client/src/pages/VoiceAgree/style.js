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
  align-items: center;
  flex-direction: column;

  width: 80%;
  height: 100%;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.SM};

  letter-spacing: 120%;
  line-height: 150%;
  margin-top: 3rem;
`;

export const CheckWrapper = styled.div`
  align-items: center;
  margin-top: 1.5rem;

  > span {
    color: ${(props) => props.theme.color.TEXT_BLACK};
    font-family: ${(props) => props.theme.font.NORMAL};
    font-size: ${(props) => props.theme.font.size.SM};
  }
`;
export const AgreeCheck = styled.input`
  margin-left: 1rem;
`;
export const AgreeText = styled.span`
  margin-left: 0.4rem;
`;

export const LinkButton = styled.button`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.ML};
  background: ${(props) => props.theme.color.MAIN_BLUE};

  width: 100%;
  border-radius: 1.2rem;
  padding: 1rem;
  margin-top: 3rem;
`;
