import React, { useState, useEffect } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";

const TeamQRViewer = ({ teamId }) => {
  const [score, setScore] = useState("");
  const [teamData, setTeamData] = useState();

  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  const getTeamData = async () => {
    // API: View Team Score
    try {
      const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.VIEW_TEAM_SCORE, {
        params: { teamId },
      });
      setTeamData({
        teamId,
        teamName: res.data.teamName,
        score: res.data.score,
      });
    } catch (error) {
      Swal.fire("API 접근 오류", "", "error");
    }
  };

  const handleScoreSubmit = async () => {
    if (Number(score) !== 0) {
      // API: Plus Team Score
      const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.PLUS_TEAM_SCORE, {
        teamId,
        score: Number(score),
      });
      Swal.fire(`${Number(score)}점 추가!`, `현재 ${res.data.score}점`, "success");
      setTeamData((prevTeamData) => ({
        ...prevTeamData,
        score: res.data.score,
      }));
    } else {
      Swal.fire(`점수를 입력해주세요.`, "", "error");
    }
  };

  useEffect(() => {
    // 랜더링 전 데이터 받아오기
    getTeamData();
  }, []);

  return (
    <s.Wrapper>
      {teamData && (
        <s.TeamScoreSection>
          <s.ScoreTitle>{teamData.teamName} 팀</s.ScoreTitle>
          <s.CurrScore>현재 {teamData.score} 점</s.CurrScore>
          <s.ScorePlusSection>
            <s.ScoreInput
              type="text"
              value={score}
              onChange={handleScoreChange}
              placeholder="점수 입력"
            />
            <s.ScoreButton onClick={handleScoreSubmit}>점수 추가</s.ScoreButton>
          </s.ScorePlusSection>
        </s.TeamScoreSection>
      )}
    </s.Wrapper>
  );
};

export default TeamQRViewer;
