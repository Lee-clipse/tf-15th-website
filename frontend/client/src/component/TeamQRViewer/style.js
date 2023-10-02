import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.color.SOFT_PURPLE};
  width: 100vw;
  height: 100vh;

  padding-bottom: 3rem;
`;

export const TeamSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ScoreTitle = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  text-align: center;

  margin-top: 3rem;
`;

export const CurrScore = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};

  margin-top: 3rem;
`;

export const ScorePlusSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ScoreInput = styled.input`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
  text-align: center;

  background: transparent;
  margin-top: 3rem;

  &::placeholder {
    color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
    font-family: ${(props) => props.theme.font.NORMAL};
    font-size: ${(props) => props.theme.font.size.L};
  }
`;
export const ScoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.PURPLE};
  border-radius: 1.4rem;
  border: 0.26rem solid ${(props) => props.theme.color.PURPLE};
  box-shadow: 0.3rem 0.3rem 0.8rem rgb(0 0 0 / 0.4);

  width: 90vw;
  padding: 1rem;
  margin-top: 4rem;

  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;

export const ExitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.MAIN_BLUE};
  border-radius: 1.4rem;
  border: 0.26rem solid ${(props) => props.theme.color.MAIN_BLUE};
  box-shadow: 0.3rem 0.3rem 0.8rem rgb(0 0 0 / 0.4);

  width: 90vw;
  padding: 1rem;
  margin-top: 4rem;

  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;

export const TeamBreakSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 10vh;
`;

export const WarningLabel = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  text-align: center;
`;

export const BreakButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.RED};
  border-radius: 1.4rem;
  box-shadow: 0.3rem 0.3rem 0.8rem rgb(0 0 0 / 0.4);

  width: 90vw;
  padding: 1.2rem 1rem;
  margin-top: 4rem;

  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
