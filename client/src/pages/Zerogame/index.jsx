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
import { renderDiceRollEvent, rollConfirmEvent } from "./alertEvent";
import RefreshButton from "@components/RefreshButton";
import { motion } from "framer-motion";
import { OchestraList } from "@styles/animation";

const ZerogamePage = () => {
  const navigate = useNavigate();

  const [userId] = useState(localStorage.getItem("userId"));
  const [teamId] = useState(localStorage.getItem("teamId"));
  const [teamData, setTeamData] = useState(null);
  const [qrImageUrl, setQrImageUrl] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    // 마운트
    loadTeamData();
    renderTeamQR();
  }, []);

  const loadTeamData = async () => {
    const teamInfo = await getTeamInfo(userId, teamId);
    if (teamInfo === null) {
      Swal.fire("API ERROR: loadTeamData()", "인포데스크로 방문 제보 부탁드립니다.", "error");
      return;
    }
    const { latestTeamId, teamName, score, index } = teamInfo;

    // 팀 해체 직후 새로고침시
    if (latestTeamId === "-") {
      await exitGameAfterTeamBreak(userId);
      navigate(RoutePath.TEAM_QR, {
        state: {
          userId: userId,
          teamId: latestTeamId,
        },
      });
      return;
    }
    // 제로게임 종료 후
    if (Number(index) === 50) {
      await exitGameByEnding(score);
      navigate(RoutePath.TEAM_QR, {
        state: {
          userId: userId,
          teamId: latestTeamId,
        },
      });
      return;
    }
    setTeamData({ teamId, teamName, score, index });
  };

  const renderTeamQR = () => {
    const qrUrl = `${ENV.CLIENT_PROD_DOMAIN}/step/team-qr?team_id=${teamId}`;
    // teamId를 이용하여 QR 코드 생성
    QRCode.toDataURL(qrUrl, function (err, url) {
      setQrImageUrl(url);
    });
  };

  const rollDice = async () => {
    const teamInfo = await getTeamInfo(userId, teamId);
    if (teamInfo === null) {
      Swal.fire("API ERROR: loadTeamData()", "인포데스크로 방문 제보 부탁드립니다.", "error");
      return;
    }
    const { latestTeamId, score, index } = teamInfo;
    if (Number(teamData.index) !== Number(index)) {
      setTeamData((prevTeamData) => ({
        ...prevTeamData,
        index,
        score,
      }));
      //! 여기 주사위 모달
      return;
    }

    // 팀 해체 직후 버튼 클릭 시
    if (latestTeamId === "-") {
      await exitGameAfterTeamBreak(userId);
      navigate(RoutePath.TEAM_QR, {
        state: {
          userId: userId,
          teamId: latestTeamId,
        },
      });
      return;
    }
    // 제로게임 종료 후
    if (Number(index) === 50) {
      await exitGameByEnding(score);
      navigate(RoutePath.TEAM_QR, {
        state: {
          userId: userId,
          teamId: latestTeamId,
        },
      });
      return;
    }

    const prevIndex = Number(index);

    // 주사위 굴리기 block
    const isBlockPassed = await emitDiceRollBlock(latestTeamId, prevIndex);
    if (!isBlockPassed) {
      if (isBlockPassed === null) {
        Swal.fire("API ERROR: Get Team Block", "인포데스크로 방문 제보 부탁드립니다.", "error");
      }
      return;
    }

    // 주사위 굴리기
    const nextIndex = await rollDiceEvent(latestTeamId, prevIndex);
    const newScore = await getTeamScore(latestTeamId);
    setTeamData((prevTeamData) => ({
      ...prevTeamData,
      index: nextIndex,
      score: newScore,
    }));

    // 엔딩
    if (nextIndex === 50) {
      await exitGameByEnding(score);
      navigate(RoutePath.TEAM_QR, {
        state: {
          userId: userId,
          teamId: latestTeamId,
        },
      });
      return;
    }
  };

  return (
    <s.Wrapper>
      {teamData && (
        <s.Container as={motion.div} variants={OchestraList} initial="hidden" animate="visible">
          <s.TeamName>{teamData.teamName} 팀</s.TeamName>
          <s.TeamScore>{teamData.score} 점</s.TeamScore>
          <s.Board src="/assets/zerogame/board.webp" />
          <s.TeamIndex>현 위치: {Booth[teamData.index]}</s.TeamIndex>
          <s.ButtonWrapper>
            <s.DiceButton onClick={rollDice}>주사위 굴리기</s.DiceButton>
            <RefreshButton />
          </s.ButtonWrapper>
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

// 초기 랜더링에 필요한 데이터를 API로 호출
const getTeamInfo = async (userId, teamId) => {
  // API: View Map Index (Redis)
  const mapIndex = await axios.get(ENV.GAME_SERVER_PROD_DOMAIN + API.VIEW_MAP_INDEX, {
    params: { teamId },
  });
  // API: Get Team Info Of User
  const teamInfo = await axios.get(ENV.SERVER_PROD_DOMAIN + API.TEAM_INFO_OF_USER, {
    params: { userId },
  });
  if (mapIndex === null || Number(teamInfo.data.code) !== 200) {
    return null;
  }
  return {
    latestTeamId: teamInfo.data.teamId,
    teamName: teamInfo.data.teamName,
    score: teamInfo.data.score,
    index: mapIndex.data.index,
  };
};

// 팀 해체 후, 점수에 따라 게임 종료 안내
const exitGameAfterTeamBreak = async (userId) => {
  localStorage.removeItem("teamId");

  // API: Get User Score
  const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.USER_SCORE, {
    params: { userId },
  });
  const lastScore = Number(res.data.score);

  if (lastScore === 0) {
    Swal.fire("제로게임 클리어!", `축하합니다! 굿즈를 수령하실 수 있습니다!`, "success");
  } else {
    Swal.fire("제로게임 종료!", `${lastScore} 점으로 종료했습니다.`, "success");
  }
};

// 주사위를 굴려서 제로게임 마지막에 도달
const exitGameByEnding = async (score) => {
  localStorage.removeItem("teamId");

  if (Number(score) === 0) {
    Swal.fire("제로게임 클리어!", `축하합니다! 굿즈를 수령하실 수 있습니다!`, "success");
  } else {
    Swal.fire("제로게임 종료!", `${score} 점으로 종료했습니다.`, "success");
  }
};

// 주사위 block 검사 후 이벤트 발동
const emitDiceRollBlock = async (teamId, prevIndex) => {
  // API: Get Team Block
  const blockRes = await axios.get(ENV.GAME_SERVER_PROD_DOMAIN + API.GET_BLOCK, {
    params: { teamId },
  });
  const { block, alreadyIndex } = blockRes.data;

  // 주사위 API 요청 말고 단순 랜더링
  if (block === "true") {
    renderDiceRollEvent(Number(prevIndex), Number(alreadyIndex));
    return false;
  }
  // 갈 수 있는 경우
  else if (block === "false") {
    return await rollConfirmEvent();
  }
  // 에러
  else {
    return null;
  }
};

// 주사위 굴리기
const rollDiceEvent = async (teamId, prevIndex) => {
  // API: Roll Dice
  const res = await axios.post(ENV.GAME_SERVER_PROD_DOMAIN + API.ROLL_DICE, {
    teamId,
  });
  if (res === null) {
    Swal.fire("API ERROR: Roll Dice", "인포데스크로 방문 제보 부탁드립니다.", "error");
    return;
  }
  const nextIndex = Number(res.data.nextIndex);
  renderDiceRollEvent(prevIndex, nextIndex);
  return nextIndex;
};

// 팀 점수 가져오기
const getTeamScore = async (teamId) => {
  // API: Get Team Score
  const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.VIEW_TEAM_SCORE, {
    params: { teamId },
  });
  return Number(res.data.score);
};

export default ZerogamePage;
