import React, { useState, useEffect } from "react";
import * as s from "./style";
import { Link, useLocation } from "react-router-dom";
import QRCode from "qrcode";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";
import axios from "axios";
import { RoutePath } from "@constants/enums";

const TeamQRPage = () => {
  const location = useLocation();

  const teamId = location.state.teamId;
  const userId = location.state.userId;

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
    const { teamName, score, index } = teamInfo;
    setTeamData({ teamId, teamName, score, index });
  };

  const renderTeamQR = () => {
    const qrUrl = `${ENV.CLIENT_PROD_DOMAIN}/step/team-qr?team_id=${teamId}`;
    // teamId를 이용하여 QR 코드 생성
    QRCode.toDataURL(qrUrl, function (err, url) {
      setQrImageUrl(url);
    });
  };

  return (
    <s.Wrapper>
      {teamData && (
        <s.Container>
          <s.TeamName>{teamData.teamName}팀</s.TeamName>
          <s.TeamScore>{teamData.score} 점으로 종료!</s.TeamScore>
          <s.TeamQRWrapper>
            <s.QRLabel>우리 팀 QR 코드</s.QRLabel>
            {qrImageUrl && <s.TeamQR src={qrImageUrl} alt="Team QR Code" />}
          </s.TeamQRWrapper>
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

export default TeamQRPage;
