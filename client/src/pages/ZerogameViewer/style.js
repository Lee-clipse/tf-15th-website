import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const MapWrapper = styled.div`
  > p {
    align-items: center;
    text-align: center;
  }
`;
export const MapLabel = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};

  margin-bottom: 2rem;
`;
export const BoothStautsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BoothWrapper = styled.div`
  > p {
    font-family: ${(props) => props.theme.font.BOLD};
    font-size: ${(props) => props.theme.font.size.L};
    text-align: center;
    border: solid 2px ${(props) => props.theme.color.TEXT_BLACK};

    margin-bottom: 0.4rem;
    padding: 0.4rem;
  }
`;
export const BoothTitle = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  white-space: nowrap;
`;
export const WaitingZoneTitle = styled.p`
  background: ${(props) => props.theme.color.YELLOW};
`;
export const BattleBoothTitle = styled.span`
  color: ${(props) => props.theme.color.ORANGE};
`;

export const StatusWrapper = styled.div``;
export const StatusRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  border: solid 2px ${(props) => props.theme.color.TEXT_BLACK};
  margin-bottom: 0.4rem;
  margin-left: 0.4rem;

  width: 100vw;

  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  padding-left: 0.4rem;

  > p {
    font-family: ${(props) => props.theme.font.BOLD};
    font-size: ${(props) => props.theme.font.size.L};
    text-align: center;

    padding: 0.4rem;
  }
`;
export const StatusMiniRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  > p {
    font-family: ${(props) => props.theme.font.BOLD};
    text-align: center;
  }
`;
export const TeamName = styled.p`
  font-size: ${(props) => props.theme.font.size.L};
  padding: 0.4rem;
`;
export const TeamScore = styled.p`
  font-size: ${(props) => props.theme.font.size.M};
  align-items: center;
  margin-right: 0.4rem;
`;

export const ClearedWrapper = styled.div``;
export const ClearedLabel = styled.p``;
export const ClearedTeamName = styled.p``;
export const ClearedTeamScore = styled.p``;
