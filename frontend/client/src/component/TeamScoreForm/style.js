import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.color.SOFT_PURPLE};
  flex-grow: 1;
  width: 100%;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  text-align: center;

  margin-top: 3rem;
`;

export const ScoreView = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  text-align: center;

  margin-top: 3rem;
`;

export const ScoreHighlight = styled.span`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};
`;

export const Input = styled.input`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
  text-align: center;

  width: 80%;
  background: transparent;
  margin-top: 3rem;

  &::placeholder {
    color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
    font-family: ${(props) => props.theme.font.NORMAL};
    font-size: ${(props) => props.theme.font.size.L};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.PURPLE};
  border-radius: 1.4rem;
  border: 0.26rem solid ${(props) => props.theme.color.PURPLE};

  width: 90vw;
  padding: 1rem;
  margin-top: 3rem;

  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
