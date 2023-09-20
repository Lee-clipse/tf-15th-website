/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ENV, API } from "@constants/env";
import QRCode from "qrcode";
import Swal from "sweetalert2";
import { RoutePath, Booth } from "@constants/enums";
import RefreshButton from "@components/RefreshButton";
import { motion } from "framer-motion";
import { OchestraList } from "@styles/animation";
import { variants } from "./motion";
import DiceModal from "@components/DiceModal";

const ZerogamePage = () => {
  const navigate = useNavigate();

  const [userId] = useState(localStorage.getItem("userId"));
  const [teamId] = useState(localStorage.getItem("teamId"));
  const [teamData, setTeamData] = useState(null);
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (nextIndex) => {
    setIsModalOpen(false);

    // 주사위 모달 종료 후
    if (nextIndex) {
      setTeamData((prevTeamData) => ({
        ...prevTeamData,
        index: Number(nextIndex),
      }));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // 마운트
    loadTeamData();
    renderTeamQR();
  }, []);

  // index가 50이면 종료 감지 목적
  useEffect(() => {
    if (!teamData) {
      return;
    }
    const thisIndex = teamData.index;
    // 엔딩
    if (thisIndex === 50) {
      // 팀 점수를 사용자들에게 전파
      exitGameByEnding(teamData.score);
      navigate(RoutePath.TEAM_QR);
      return;
    }
  }, [teamData]);

  // 초기 로딩 && 새로 고침
  const loadTeamData = async () => {
    const teamInfo = await getTeamInfo(userId, teamId);
    if (teamInfo === null) {
      Swal.fire("API ERROR: loadTeamData()", "인포데스크로 방문 제보 부탁드립니다.", "error");
      return;
    }
    console.log(teamInfo);
    const { teamName, score, index } = teamInfo;

    // 제로게임 종료 후
    if (index === 50) {
      exitGameByEnding(score);
      navigate(RoutePath.TEAM_QR);
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

  const popDiceModal = async () => {
    // API: Get Team Block
    const block = await getTeamBlock(teamId);
    // block이 true면 alert 하고 return
    if (block === "true") {
      Swal.fire("안내를 기다려주세요!", "스텝의 안내에 따라 이동 부탁드립니다!", "info");
      return;
    }
    // block이 false면 주사위 모달 띄우기
    if (block === "false") {
      openModal();
    } else {
      Swal.fire("API 오류!", "API: Get Team Block", "error");
    }
  };

  return (
    <s.Wrapper>
      {isModalOpen && <DiceModal closeModal={closeModal} />}
      {teamData && (
        <s.Container as={motion.div} variants={OchestraList} initial="hidden" animate="visible">
          <s.TeamName>{teamData.teamName} 팀</s.TeamName>
          <s.TeamScore>현재 탄소 스코어</s.TeamScore>
          <s.TeamScore>{teamData.score} 점</s.TeamScore>
          <s.BoardWapper>
            <s.Board src="/assets/zerogame/board.webp" />
            <s.IndexMarker src={`/assets/zerogame/index/${teamData.index}.svg`} />
            <s.FlagWrapper as={motion.div} initial="hidden" animate="visible" variants={variants}>
              <s.Flag src={`/assets/zerogame/index/${teamData.index}-flag.svg`} />
            </s.FlagWrapper>
          </s.BoardWapper>
          <s.TeamIndex>현 위치: {Booth[teamData.index]}</s.TeamIndex>
          <s.ButtonWrapper>
            <s.DiceButton onClick={popDiceModal}>주사위 굴리기</s.DiceButton>
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
  const mapRes = await axios.get(ENV.GAME_SERVER_PROD_DOMAIN + API.VIEW_MAP_INDEX, {
    params: { teamId },
  });
  if (Number(mapRes.data.code) !== 200) {
    return null;
  }
  // API: Get Team Info Of User
  const teamInfo = await axios.get(ENV.SERVER_PROD_DOMAIN + API.TEAM_INFO_OF_USER, {
    params: { userId },
  });
  if (Number(teamInfo.data.code) !== 200) {
    return null;
  }
  return {
    teamName: teamInfo.data.teamName,
    score: Number(teamInfo.data.score),
    index: Number(mapRes.data.index),
  };
};

// 주사위를 굴려서 제로게임 마지막에 도달
const exitGameByEnding = (score) => {
  if (score === 0) {
    Swal.fire("제로게임 클리어!", `축하합니다! 굿즈를 수령하실 수 있습니다!`, "success");
  } else {
    Swal.fire("제로게임 종료!", `${score} 점으로 종료했습니다.`, "success");
  }
};

const getTeamBlock = async (teamId) => {
  // API: Get Team Block
  const res = await axios.get(ENV.GAME_SERVER_PROD_DOMAIN + API.GET_BLOCK, {
    params: { teamId },
  });
  if (Number(res.data.code) !== 200) {
    return null;
  }
  return res.data.block;
};

export default ZerogamePage;
