import React, { useEffect, useState } from "react";
import * as s from "./style";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ENV, API } from "@constants/env";
import { Booth } from "../../constants/enums";

const ZerogamePage = () => {
  const location = useLocation();
  const { userId, teamId } = location.state;

  const [teamData, setTeamData] = useState();

  const getTeamData = async () => {
    const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.VIEW_TEAM_SCORE, {
      params: { teamId },
    });
    const resRedis = await axios.get(ENV.GAME_PROD_DEV_DOMAIN + API.VIEW_MAP_INDEX, {
      params: { teamId },
    });

    setTeamData({
      teamId: res.data.teamId,
      teamName: res.data.teamName,
      score: res.data.score,
      index: resRedis.data.index,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // 마운트
    getTeamData();
    console.log(teamData);
  }, []);

  return (
    <s.Wrapper>
      {teamData && (
        <s.Container>
          <s.TeamName>{teamData.teamName} 팀</s.TeamName>
          <s.TeamScore>{teamData.score} 점</s.TeamScore>
          <s.Board src="/assets/board.svg" />
          <s.TeamIndex>현 위치: {Booth[teamData.index]}</s.TeamIndex>
          <s.DiceButton>주사위 굴리기</s.DiceButton>
        </s.Container>
      )}
    </s.Wrapper>
  );
};

export default ZerogamePage;
