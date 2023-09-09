import styled from "styled-components";

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.color.SOFT_PURPLE};
  flex-grow: 3;
  width: 100%;
`;

export const TeamScoreSection = styled.div``;

export const ScoreTitle = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  text-align: center;

  margin-top: 4rem;
`;

// 팀이 있을 경우

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

// 현재 참가 가능한 팀 목록

export const TeamListSection = styled.div`
  margin-top: 6rem;
`;

export const ListTitle = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  text-align: center;

  margin-bottom: 2rem;
`;

export const TeamList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TeamRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  background: ${(props) => props.theme.color.TEXT_WHITE};

  width: 90vw;
  border-radius: 1.4rem;
  padding: 1rem 1.2rem;
  margin-top: 1rem;
`;

export const TeamName = styled.span`
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};
`;
export const MemberCount = styled.span`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
export const CountText = styled.span`
  color: ${(props) => props.theme.color.GREEN};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
export const JoinButton = styled.button`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  background: ${(props) => props.theme.color.PURPLE};

  border-radius: 1.2rem;
  padding: 1rem;
`;
