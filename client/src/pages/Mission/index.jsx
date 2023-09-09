import React, { useEffect } from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import Swal from "sweetalert2";
import axios from "axios";
import { ENV, API } from "@constants/env";

const MissionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const routeToZeroGame = async () => {
    const userId = localStorage.getItem("userId");
    if (userId === null) {
      Swal.fire("참가 대상이 아닙니다!", "접수 후 방문 부탁드립니다.", "warning");
      return;
    }

    const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.USER_INFO, {
      params: { userId },
    });

    const donation = Number(res.data.userInfo.donation);
    if (donation === 0) {
      Swal.fire("참가 대상이 아닙니다!", "기부금을 내신 분만 참가하실 수 있습니다.", "warning");
      return;
    }

    const teamId = localStorage.getItem("teamId");
    if (teamId === null) {
      const thisTeamId = res.data.userInfo.teamId;
      if (thisTeamId === "-") {
        Swal.fire(
          "제로게임 참가 대상입니다!",
          "스텝이 팀을 형성할 때까지 기다려주세요.",
          "success"
        );
        return;
      } else {
        const thisTeamId = res.data.userInfo.teamId;
        localStorage.setItem("teamId", thisTeamId);
        navigate(RoutePath.ZEROGAME, {
          state: {
            userId,
            teamId: thisTeamId,
          },
        });
        return;
      }
    } else {
      navigate(RoutePath.ZEROGAME, {
        state: {
          userId,
          teamId,
        },
      });
    }
  };

  return (
    <PageTemplate>
      <TopNavBar title={"제로게임 미션"} fixed={false} />
      <s.Wrapper>
        <s.Poster src="/assets/zerogame_poster1.svg" />
        <s.Poster src="/assets/zerogame_poster2.svg" />
        <s.Poster src="/assets/zerogame_poster3.svg" />
        <s.ButtonWrapper>
          <s.ZeroGameButton src="/assets/zerogame_go_button.svg" onClick={routeToZeroGame} />
        </s.ButtonWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default MissionPage;
