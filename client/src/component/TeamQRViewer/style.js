import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.color.SOFT_PURPLE};
  width: 100vw;
  height: 100vh;

  padding-bottom: 14rem;
`;

export const TeamScoreSection = styled.div`
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

  width: 90vw;
  padding: 1rem;
  margin-top: 4rem;

  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
