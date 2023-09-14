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
import { OchestraList, OchestraXItem, OchestraYItem } from "@styles/animation";

const MissionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // 접수된 사용자가 스텝에 의해 팀 등록 후 새로고침시 LS에 teamId 저장
    pageInitExecuter();
  }, []);

  const pageInitExecuter = async () => {
    const userId = localStorage.getItem("userId");
    const teamId = localStorage.getItem("teamId");

    // 미접수 사용자: 단순 조회
    if (userId === null) {
      return;
    }
    // 접수 but 팀 소속 대기 사용자: 단순 조회
    if (teamId === null) {
      try {
        // API: Get User Team
        const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.GET_USER_TEAM, {
          params: { userId },
        });

        const joinedTeamId = res.data.teamId;
        // 스텝에 의해 팀 소속 직후
        if (joinedTeamId !== "-") {
          localStorage.setItem("teamId", joinedTeamId);
          return;
        }
      } catch (error) {
        Swal.fire("API ERROR: Get User Team", "인포데스크로 방문 제보 부탁드립니다.", "error");
      }
    }
  };

  const routeToZeroGame = async () => {
    const userId = localStorage.getItem("userId");
    const teamId = localStorage.getItem("teamId");

    // 미접수 사용자
    if (userId === null) {
      Swal.fire("접수되지 않은 사용자입니다.", "홈페이지에서 접수하실 수 있습니다.", "warning");
      return;
    }
    // 팀 참가 대기 사용자
    if (teamId === null) {
      try {
        // API: Get User Team
        const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.GET_USER_TEAM, {
          params: { userId },
        });

        const joinedTeamId = res.data.teamId;
        // 스텝에 의해 팀 소속 직후
        if (joinedTeamId !== "-") {
          localStorage.setItem("teamId", joinedTeamId);
          navigate(RoutePath.ZEROGAME);
          return;
        } else {
          Swal.fire(
            "제로게임 참가 대상입니다!",
            "스텝이 팀을 만들 때까지 기다려주세요.",
            "success"
          );
          return;
        }
      } catch (error) {
        Swal.fire("API ERROR: Get User Team", "인포데스크로 방문 제보 부탁드립니다.", "error");
      }
      return;
    }
    // 스텝에 의해 팀 참가 직후 버튼 클릭
    else {
      navigate(RoutePath.ZEROGAME);
    }
  };

  return (
    <PageTemplate>
      <TopNavBar title={"제로게임 미션"} fixed={false} />
      {/* <s.Wrapper> */}
      <s.Wrapper as={motion.div} variants={OchestraList} initial="hidden" animate="visible">
        <s.Poster src="/assets/zerogame_poster1.webp" />
        <s.Poster2nd src="/assets/zerogame_poster2.webp" />
        <s.Poster src="/assets/zerogame_poster3.webp" />
        <s.ButtonWrapper>
          <s.ZeroGameButton src="/assets/zerogame_go_button.svg" onClick={routeToZeroGame} />
        </s.ButtonWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default MissionPage;
