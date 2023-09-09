import React, { useState, useEffect } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";

const StepManageTeam = ({ userInfo, teamList }) => {
  const [score, setScore] = useState("");
  const [teamName, setTeamName] = useState(userInfo.teamName);
  const [teamCounts, setTeamCounts] = useState(null);

  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  const handleTeamInfoLoad = async () => {
    const initialTeamCounts = {};
    teamList.forEach((team) => {
      initialTeamCounts[team.id] = team.count;
    });
    setTeamCounts(initialTeamCounts);
  };

  useEffect(() => {
    // 랜더링 전 데이터 받아오기
    handleTeamInfoLoad();
  }, []);

  // 팀 점수 추가
  const handleScoreSubmit = async () => {
    if (Number(score) !== 0) {
      // API: Plus Team Score
      const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.PLUS_TEAM_SCORE, {
        teamId: userInfo.teamId,
        score: Number(score),
      });
      alert(`${Number(score)}점 추가!\n현재 ${res.data.score}점`);
    } else {
      alert("점수를 입력해주세요.");
    }
  };

  // 팀 참가
  const handleTeamJoinSubmit = async (e) => {
    const [thisTeamId, thisTeamName] = e.target.id.split("/");
    // API: Join User
    //! DEV
    const res = await axios.post(ENV.SERVER_DEV_DOMAIN + API.JOIN_USER, {
      userId: userInfo.id,
      teamId: thisTeamId,
    });
    const resCode = res.data.code;
    if (Number(resCode) === 202) {
      // TODO: 모달로 구현 (팀 변경 의사 묻기)
      alert("해당 팀은 이미 참가되어 있는 팀입니다.");
    } else {
      setTeamCounts((prevCounts) => ({
        ...prevCounts,
        [thisTeamId]: res.data.count,
      }));
      setTeamName(res.data.teamName);
      alert(`${userInfo.name}님 ${thisTeamName}팀 참가!`);
    }
  };

  return (
    <s.StepWrapper>
      {teamCounts && (
        <s.StepContainer>
          <s.TeamScoreSection>
            <s.ScoreTitle>{teamName} 팀</s.ScoreTitle>
            {teamName !== "-" && (
              <s.ScorePlusSection>
                <s.ScoreInput
                  type="text"
                  value={score}
                  onChange={handleScoreChange}
                  placeholder="점수 입력"
                />
                <s.ScoreButton onClick={handleScoreSubmit}>점수 추가</s.ScoreButton>
              </s.ScorePlusSection>
            )}
          </s.TeamScoreSection>

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
        </s.StepContainer>
      )}
    </s.StepWrapper>
  );
};

export default StepManageTeam;
