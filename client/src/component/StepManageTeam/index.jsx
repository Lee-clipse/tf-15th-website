import React, { useState, useEffect } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";

const StepManageTeam = ({ userInfo, teamList }) => {
  //! FOR DEV
  const teamName = "무슨무슨";

  const [score, setScore] = useState("");

  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  const handleSubmit = async () => {
    if (Number(score) !== 0) {
      // API: Plus Team Score
      const res = await axios.post(ENV.SERVER_DEV_DOMAIN + API.PLUS_TEAM_SCORE, {
        teamId: userInfo.teamId,
        score: Number(score),
      });
      console.log(res.data);
      alert(`${Number(score)}점이 추가되었습니다!\n현재 ${res.data.score}점`);
    } else {
      alert("점수를 입력해주세요.");
    }
  };

  return (
    <s.StepWrapper>
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
            <s.ScoreButton onClick={handleSubmit}>점수 추가</s.ScoreButton>
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
                <s.CountText>{row.count}</s.CountText> / 5
              </s.MemberCount>
              <s.JoinButton>참가</s.JoinButton>
            </s.TeamRow>
          ))}
        </s.TeamList>
      </s.TeamListSection>
    </s.StepWrapper>
  );
};

export default StepManageTeam;
