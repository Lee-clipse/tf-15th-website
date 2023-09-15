/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import Swal from "sweetalert2";
import axios from "axios";
import { ENV, API } from "@constants/env";
import { motion } from "framer-motion";
import { OchestraList } from "@styles/animation";

const MissionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const routeToZeroGame = async () => {
    const userId = localStorage.getItem("userId");
    const teamId = await getTeamId(userId);

    // 미접수 사용자
    if (userId === null) {
      Swal.fire("접수되지 않은 사용자입니다.", "홈페이지에서 접수하실 수 있습니다.", "warning");
      return;
    }
    // 팀 참가 대기 사용자 (제로게임 처음)
    if (teamId === null) {
      Swal.fire("제로게임 참가 대상입니다!", "스텝이 팀을 만들 때까지 기다려주세요.", "success");
    }
    // 스텝에 의해 팀 참가 직후 버튼 클릭
    else if (teamId !== "-") {
      navigate(RoutePath.ZEROGAME);
    }
  };

  return (
    <PageTemplate>
      <TopNavBar title={"제로게임 미션"} fixed={false} />
      <s.Wrapper as={motion.div} variants={OchestraList} initial="hidden" animate="visible">
        <s.Poster src="/assets/mission/zerogame_poster1.webp" />
        <s.Poster2nd src="/assets/mission/zerogame_poster2.webp" />
        <s.Poster src="/assets/mission/zerogame_poster3.webp" />
        <s.ButtonWrapper>
          <s.ZeroGameButton
            src="/assets/mission/zerogame_go_button.svg"
            onClick={routeToZeroGame}
          />
        </s.ButtonWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

const getTeamId = async (userId) => {
  // API: Get User Team
  const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.GET_USER_TEAM, {
    params: { userId },
  });
  if (Number(res.data.code) === 404) {
    return;
  }

  const joinedTeamId = res.data.teamId;
  // 팀 소속 없는 사용자
  if (joinedTeamId === "-") {
    return null;
  }
  // 스텝에 의해 팀 소속 직후
  localStorage.setItem("teamId", joinedTeamId);
  return joinedTeamId;
};

export default MissionPage;
