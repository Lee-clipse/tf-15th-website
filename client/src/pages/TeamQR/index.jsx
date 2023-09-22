/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as s from "./style";
import { Link } from "react-router-dom";
import QRCode from "qrcode";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";
import axios from "axios";
import { RoutePath } from "@constants/enums";
import GoodsModal from "@components/GoodsModal";

const TeamQRPage = () => {
  const teamId = localStorage.getItem("teamId");
  const userId = localStorage.getItem("userId");

  const [teamData, setTeamData] = useState(null);
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    const { teamName, score, index } = teamInfo;

    // API: Is Registered Team
    const res = await axios.post(ENV.GAME_SERVER_PROD_DOMAIN + API.IS_REGISTERED, {
      teamId,
      index: String(index),
      score: Number(score),
    });
    if (res === null) {
      Swal.fire("API ERROR: Spread Team Score", "인포데스크로 방문 제보 부탁드립니다.", "error");
      return;
    }
    setTeamData({ teamId, teamName, score, index });
    console.log(res.data.registered);
    if (res.data.registered === "true") {
      await spreadTeamScore(teamId);
    }
  };

  const renderTeamQR = () => {
    const qrUrl = `${ENV.CLIENT_PROD_DOMAIN}/step/qr?user_id=${userId}`;
    // teamId를 이용하여 QR 코드 생성
    QRCode.toDataURL(qrUrl, function (err, url) {
      setQrImageUrl(url);
    });
  };

  const spreadTeamScore = async (teamId) => {
    // API: Spread Team Score
    const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.SPREAD_TEAM_SCORE, {
      teamId,
    });
    if (res === null) {
      Swal.fire("API ERROR: Spread Team Score", "인포데스크로 방문 제보 부탁드립니다.", "error");
      return;
    }
    console.log("Spread Team Score Success!");
  };

  return (
    <s.Wrapper>
      {isModalOpen && <GoodsModal closeModal={closeModal} />}
      {teamData && (
        <s.Container>
          <s.TeamName>{teamData.teamName}팀</s.TeamName>
          <s.TeamScore>{teamData.score} 점으로 종료!</s.TeamScore>
          {Number(teamData.score) === 0 ? (
            <s.TeamQRWrapper>
              <s.QRLabel>굿즈 받으러 가기!</s.QRLabel>
              {qrImageUrl && <s.TeamQR src={qrImageUrl} alt="Team QR Code" />}
              <s.GoodsModalButtonWrapper onClick={openModal}>
                <s.GoodsModalText>굿즈 사진 보기</s.GoodsModalText>
                <s.GalleryIcon src="/assets/zerogame/gallery.svg" />
              </s.GoodsModalButtonWrapper>
            </s.TeamQRWrapper>
          ) : (
            <s.TeamQRWrapper>
              <s.Poster src="/assets/zerogame/poster.svg" />
              <s.InduceText>
                점수 획득 부스에서 체험 활동을 하시면 <br />
                0점을 만들어 굿즈를 가질 수 있습니다!
              </s.InduceText>
              <s.GoodsModalButtonWrapper onClick={openModal}>
                <s.GoodsModalText>굿즈 사진 보기</s.GoodsModalText>
                <s.GalleryIcon src="/assets/zerogame/gallery.svg" />
              </s.GoodsModalButtonWrapper>
            </s.TeamQRWrapper>
          )}

          <Link to={RoutePath.MAIN}>
            <s.MainButton>홈페이지로 돌아가기</s.MainButton>
          </Link>
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
    latestTeamId: teamInfo.data.teamId,
    teamName: teamInfo.data.teamName,
    score: Number(teamInfo.data.score),
    index: mapRes.data.index,
  };
};

export default TeamQRPage;
