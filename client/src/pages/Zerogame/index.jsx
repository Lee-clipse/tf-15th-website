import React, { useEffect, useState } from "react";
import * as s from "./style";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ENV, API } from "@constants/env";
import { Booth } from "../../constants/enums";
import QRCode from "qrcode";
import Swal from "sweetalert2";

const ZerogamePage = () => {
  const location = useLocation();
  const { userId, teamId } = location.state;

  const [teamData, setTeamData] = useState();
  const [qrImageUrl, setQrImageUrl] = useState("");

  const getTeamData = async () => {
    try {
      const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.VIEW_TEAM_SCORE, {
        params: { teamId },
      });
      const resRedis = await axios.get(ENV.GAME_SERVER_PROD_DOMAIN + API.VIEW_MAP_INDEX, {
        params: { teamId },
      });

      setTeamData({
        teamId: res.data.teamId,
        teamName: res.data.teamName,
        score: res.data.score,
        index: resRedis.data.index,
      });
    } catch (error) {
      Swal.fire("API 접근 오류", "", "error");
    }
  };

  const renderTeamQR = () => {
    const qrUrl = `${ENV.CLIENT_PROD_DOMAIN}/step/team-qr?team_id=${teamId}`;
    // teamId를 이용하여 QR 코드 생성
    QRCode.toDataURL(qrUrl, function (err, url) {
      setQrImageUrl(url);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // 마운트
    getTeamData();
    renderTeamQR();
  }, []);

  return (
    <s.Wrapper>
      {teamData && (
        <s.Container>
          <s.TeamName>{teamData.teamName} 팀</s.TeamName>
          <s.TeamScore>{teamData.score} 점</s.TeamScore>
          <s.Board src="/assets/board.svg" />
          <s.TeamIndex>현 위치: {Booth[teamData.index]}</s.TeamIndex>
          <s.DiceButton>주사위 굴리기</s.DiceButton>
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
