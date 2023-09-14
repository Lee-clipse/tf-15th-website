import React, { useState } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";

const TeamScoreForm = ({ userInfo }) => {
  const [currScore, setCurrScore] = useState(userInfo.teamScore);
  const [inputScore, setInputScore] = useState("");

  const handleScoreChange = (e) => {
    setInputScore(e.target.value);
  };

  // 팀 점수 추가
  const handleScoreSubmit = async () => {
    if (Number(inputScore) !== 0) {
      // API: Plus Team Score
      const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.PLUS_TEAM_SCORE, {
        teamId: userInfo.teamId,
        score: Number(inputScore),
      });
      const plusedScore = Number(res.data.score);
      Swal.fire(`${Number(inputScore)}점 추가!\n현재 ${plusedScore}점`, "", "success");
      setCurrScore(plusedScore);
      setInputScore("");
    } else {
      Swal.fire("입력 오류!", "점수를 입력해주세요.", "error");
    }
  };

  return (
    <s.Wrapper>
      <s.Label>팀 점수 입력</s.Label>
      <s.ScoreView>
        현재 <s.ScoreHighlight>{currScore}</s.ScoreHighlight> 점
      </s.ScoreView>
      <s.Input
        type="text"
        value={inputScore}
        onChange={handleScoreChange}
        placeholder="점수 입력"
      />
      <s.Button onClick={handleScoreSubmit}>점수 추가</s.Button>
    </s.Wrapper>
  );
};

export default TeamScoreForm;
