import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: scroll;
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
`;
export const BoothStautsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-grow: 1;
`;
export const BoothTitle = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
`;
export const WaitingZoneTitle = styled.p`
  background: ${(props) => props.theme.color.YELLOW};
`;
export const BattleBoothTitle = styled.span`
  color: ${(props) => props.theme.color.ORANGE};
`;

export const StatusWrapper = styled.div`
  flex-grow: 30;
`;
export const StatusRow = styled.div``;
export const TeamName = styled.p``;
export const TeamScore = styled.p``;

export const ClearedWrapper = styled.div``;
export const ClearedLabel = styled.p``;
export const ClearedTeamName = styled.p``;
export const ClearedTeamScore = styled.p``;
