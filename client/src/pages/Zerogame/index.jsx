/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ENV, API } from "@constants/env";
import { Booth } from "../../constants/enums";
import QRCode from "qrcode";
import Swal from "sweetalert2";
import { RoutePath } from "@constants/enums";

const ZerogamePage = () => {
  const naviagte = useNavigate();

  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [teamId, setTeamId] = useState(localStorage.getItem("teamId"));
  const [teamData, setTeamData] = useState();
  const [qrImageUrl, setQrImageUrl] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    // 마운트
    getTeamData();
    renderTeamQR();
  }, []);

  const getTeamData = async () => {
    try {
      // API: View Map Index (Redis)
      const resRedis = await axios.get(ENV.GAME_SERVER_PROD_DOMAIN + API.VIEW_MAP_INDEX, {
        params: { teamId },
      });
      // API: Get Team Info Of User
      const teamInfo = await axios.get(ENV.SERVER_PROD_DOMAIN + API.TEAM_INFO_OF_USER, {
        params: { userId },
      });

      const { teamName, score } = teamInfo.data;
      const { index } = resRedis.data;

      const latestTeamId = teamInfo.data.teamId;
      // 팀 해체 직후 새로고침시
      if (latestTeamId === "-") {
        localStorage.removeItem("teamId");

        // Get User Score
        const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.USER_SCORE, {
          params: { userId },
        });
        const lastScore = Number(res.data.score);
        Swal.fire("제로게임 종료!", `${lastScore} 점으로 종료했습니다.`, "success");
        naviagte(RoutePath.MAIN);
      }

      setTeamData({ teamId, teamName, score, index });
    } catch (error) {
      Swal.fire(
        "API ERROR: View Team Score || View Map Index",
        "인포데스크로 방문 제보 부탁드립니다.",
        "error"
      );
    }
  };

  const renderTeamQR = () => {
    const qrUrl = `${ENV.CLIENT_PROD_DOMAIN}/step/team-qr?team_id=${teamId}`;
    // teamId를 이용하여 QR 코드 생성
    QRCode.toDataURL(qrUrl, function (err, url) {
      setQrImageUrl(url);
    });
  };

  const rollDice = async () => {
    // try {
    //   // API: View Team Score
    //   const teamRow = await axios.get(ENV.SERVER_PROD_DOMAIN + API.VIEW_TEAM_SCORE, {
    //     params: { teamId },
    //   });
    //   // 팀 해체 후 새로고침하지 않은 참가자에 대해 Main으로 이동
    //   if (localStorage.getItem("teamId") !== teamRow.data.teamId) {
    //     Swal.fire("제로게임 종료!", `${teamRow.data.score} 점으로 종료했습니다.`, "success");
    //     localStorage.setItem("teamId", "-");
    //     naviagte(RoutePath.MAIN);
    //   }
    //   const latestTeamId = teamRow.data.teamId;
    //   const prevIndex = Number(teamData.index);
    //   // API: Roll Dice
    //   const res = await axios.post(ENV.GAME_SERVER_PROD_DOMAIN + API.ROLL_DICE, {
    //     teamId: latestTeamId,
    //   });
    //   setTeamData((prevTeamData) => ({
    //     ...prevTeamData,
    //     index: res.data.nextIndex,
    //   }));
    //   const nextIndex = Number(res.data.nextIndex);
    //   const Toast = Swal.mixin({
    //     toast: true,
    //     position: "center-center",
    //     showConfirmButton: false,
    //     timer: 2000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener("mouseenter", Swal.stopTimer);
    //       toast.addEventListener("mouseleave", Swal.resumeTimer);
    //     },
    //   });
    //   Toast.fire({
    //     icon: "success",
    //     title: `${nextIndex % 10 !== 0 ? nextIndex - prevIndex : "대기소로"} 이동!`,
    //   });
    //   if (nextIndex === 0 || nextIndex === 50) {
    //     Swal.fire("제로게임 종료!", `${teamData.score} 점으로 종료했습니다.`, "success");
    //     return;
    //   }
    //   console.log(nextIndex);
    // } catch (error) {
    //   Swal.fire("API 접근 오류", "API:Roll Dice", "error");
    // }
  };

  return (
    <s.Wrapper>
      {teamData && (
        <s.Container>
          <s.TeamName>{teamData.teamName} 팀</s.TeamName>
          <s.TeamScore>{teamData.score} 점</s.TeamScore>
          <s.Board src="/assets/board.svg" />
          <s.TeamIndex>현 위치: {Booth[teamData.index]}</s.TeamIndex>
          <s.DiceButton onClick={rollDice}>주사위 굴리기</s.DiceButton>
          <s.TeamQRWrapper>
            <s.QRLabel>우리 팀 QR 코드</s.QRLabel>
            <s.ArrowIcon src="/assets/down_arrow_double_white.svg" />
            {qrImageUrl && <s.TeamQR src={qrImageUrl} alt="Team QR Code" />}
          </s.TeamQRWrapper>
        </s.Container>
      )}
    </s.Wrapper>
  );
};

export default ZerogamePage;
