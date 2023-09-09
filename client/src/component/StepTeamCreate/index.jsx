import React, { useEffect, useState } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";

const StepTeamCreate = () => {
  const [teamList, setTeamList] = useState(null);

  const handleTeamListLoad = async () => {
    // API: View Waiting Team
    try {
      const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.VIEW_WAITING_TEAM);
      const newTeamList = res.data.teamList;
      setTeamList(newTeamList);
    } catch (error) {
      console.error("FOR PROD SERVER");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // 랜더링 전 데이터 받아오기
    handleTeamListLoad();
  }, []);

  // 팀 생성
  const handleTeamCreateSubmit = async () => {
    // API: Create Team
    const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.CREATE_TEAM);
    setTeamList((prevTeamList) => [...prevTeamList, { ...res.data.teamRow }]);

    // API: Init Team Map Index
    const gameRes = await axios.post(ENV.GAME_SERVER_PROD_DOMAIN + API.INIT_TEAM_MAP_INDEX, {
      teamId: res.data.teamRow.id,
    });

    alert(`${res.data.teamRow.name}팀이 생성되었습니다!`);
  };

  return (
    <s.Wrapper>
      {teamList && (
        <s.Container>
          <s.Title>팀 현황</s.Title>
          <s.CreateButton onClick={handleTeamCreateSubmit}>팀 생성</s.CreateButton>
          <s.TeamList>
            {teamList.map((row, index) => (
              <s.TeamRow key={index}>
                <s.TeamName>{row.name} 팀</s.TeamName>
                <s.MemberCount>
                  <s.CountText>{row.count}</s.CountText> / 5
                </s.MemberCount>
              </s.TeamRow>
            ))}
          </s.TeamList>
        </s.Container>
      )}
    </s.Wrapper>
  );
};

export default StepTeamCreate;
