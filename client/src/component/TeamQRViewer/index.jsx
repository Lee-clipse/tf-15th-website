/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";

const TeamQRViewer = ({ teamId }) => {
  const [score, setScore] = useState("");
  const [teamData, setTeamData] = useState();

  useEffect(() => {
    // 랜더링 전 데이터 받아오기
    getTeamData();
  }, []);

  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  const getTeamData = async () => {
    try {
      // API: View Team Score
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
      try {
        // API: Move To Zone
        const moveRes = await axios.post(ENV.GAME_SERVER_PROD_DOMAIN + API.MOVE_TO_ZONE, {
          teamId,
        });
        if (Number(moveRes.data.code) === 400) {
          Swal.fire("유효하지 않은 요청입니다.", "대기소에서는 점수를 줄 수 없습니다.", "error");
          return;
        }
        if (Number(moveRes.data.code) !== 200) {
          Swal.fire("API 오류!", "API: Move To Zone", "error");
          return;
        }
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
      } catch (error) {
        Swal.fire("API 오류!", "API: Plus Team Score", "error");
      }
    } else {
      Swal.fire(`점수를 입력해주세요.`, "", "error");
    }
  };

  const exitFromWaitingArea = async () => {
    // API: Manage Block
    const blockRes = await axios.post(ENV.GAME_SERVER_PROD_DOMAIN + API.MANAGE_BLOCK, {
      teamId,
      block: "false",
    });
    if (Number(blockRes.data.code) === 200) {
      Swal.fire("출동 허가!", "대원들의 안녕을 빌어주세요.", "success");
    } else {
      Swal.fire("API 오류!", "API: Manage Block", "error");
    }
  };

  return (
    <s.Wrapper>
      {teamData && (
        <s.TeamSection>
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
            <s.ExitButton onClick={exitFromWaitingArea}>부스로 출동!!!</s.ExitButton>
          </s.ScorePlusSection>
        </s.TeamSection>
      )}
    </s.Wrapper>
  );
};

export default TeamQRViewer;
