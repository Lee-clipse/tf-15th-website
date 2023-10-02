/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";

const StepManageTeam = ({ userInfo, teamList }) => {
  const [teamCounts, setTeamCounts] = useState(null);

  useEffect(() => {
    // 랜더링 전 데이터 받아오기
    handleTeamInfoLoad();
  }, []);

  const handleTeamInfoLoad = async () => {
    const initialTeamCounts = {};
    teamList.forEach((team) => {
      initialTeamCounts[team.id] = team.count;
    });
    setTeamCounts(initialTeamCounts);
  };

  // 팀 참가
  const handleTeamJoinSubmit = async (e) => {
    const [thisTeamId, thisTeamName] = e.target.id.split("/");
    // API: Join User
    const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.JOIN_USER, {
      userId: userInfo.id,
      teamId: thisTeamId,
    });
    if (Number(res.data.code) === 202) {
      Swal.fire("입력 오류!", "해당 팀은 이미 참가되어 있는 팀입니다.", "error");
    } else {
      setTeamCounts((prevCounts) => ({
        ...prevCounts,
        [thisTeamId]: res.data.count,
      }));
      Swal.fire(`${userInfo.name}님 ${thisTeamName}팀 참가!`, "", "success");
    }
  };

  return (
    <s.StepWrapper>
      {teamCounts && (
        <s.TeamListSection>
          <s.ListTitle>참가 가능 팀 목록</s.ListTitle>
          <s.TeamList>
            {teamList.map((row, index) => (
              <s.TeamRow key={index}>
                <s.TeamName>{row.name} 팀</s.TeamName>
                <s.MemberCount>
                  <s.CountText>{teamCounts[row.id]}</s.CountText> / 5
                </s.MemberCount>
                <s.JoinButton id={`${row.id}/${row.name}`} onClick={handleTeamJoinSubmit}>
                  참가
                </s.JoinButton>
              </s.TeamRow>
            ))}
          </s.TeamList>
        </s.TeamListSection>
      )}
    </s.StepWrapper>
  );
};

export default StepManageTeam;
