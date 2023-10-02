import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};

  margin-bottom: 2rem;
  letter-spacing: 0.1rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.SM};

  width: 80vw;
  line-height: 140%;
  margin-top: 0.4rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.BACKGROUND};
  border-radius: 1.4rem;
  border: 0.26rem solid ${(props) => props.theme.color.MAIN_BLUE};

  width: 80vw;
  padding: 1rem;
  margin-top: 5rem;

  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};
`;
