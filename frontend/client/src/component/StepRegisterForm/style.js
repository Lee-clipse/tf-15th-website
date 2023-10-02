import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};
`;

export const Hint = styled.p`
  color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};

  margin-top: 2rem;
`;

export const Input = styled.input`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.M};

  width: 80vw;
  text-align: center;

  margin-top: 5rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.BACKGROUND};
  border-radius: 1.4rem;
  border: 0.26rem solid ${(props) => props.theme.color.PURPLE};

  width: 80vw;
  padding: 1rem;
  margin-top: 5rem;

  color: ${(props) => props.theme.color.PURPLE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};
`;
