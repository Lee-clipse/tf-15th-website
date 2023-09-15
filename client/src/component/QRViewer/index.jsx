/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";
import StepManageTeam from "../StepManageTeam";
import Swal from "sweetalert2";
import UserScoreForm from "@components/UserScoreForm";

const QRViewer = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [teamList, setTeamList] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 랜더링 전 데이터 받아오기
    loadUserInfo();
    loadTeamList();
  }, []);

  const loadUserInfo = async () => {
    try {
      // API: Get User Info
      const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.USER_INFO, {
        params: { userId },
      });
      if (Number(res.data.code) === 404) {
        Swal.fire("API 오류", `${userId} 사용자를 찾을 수 없습니다.`, "error");
        return;
      }
      const newUserInfo = res.data.userInfo;
      setUserInfo(newUserInfo);
    } catch (error) {
      Swal.fire("API 오류", "API: Get User Info", "error");
    }
  };

  const loadTeamList = async () => {
    try {
      // API: View Waiting Team
      const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.VIEW_WAITING_TEAM, {});
      const newTeamList = res.data.teamList;
      setTeamList(newTeamList);
    } catch (error) {
      Swal.fire("API 오류", "API: View Waiting Team", "error");
    }
  };

  return (
    <s.Wrapper>
      {userInfo && (
        <s.Container>
          <s.InfoWrapper>
            <s.InfoSection>
              <s.InfoText>
                {userInfo.name} / {userInfo.age}
              </s.InfoText>
              <s.InfoText>{userInfo.phoneNumber}</s.InfoText>
              <s.InfoText>{userInfo.location}</s.InfoText>
              <s.InfoText>
                개인정보 제공:{" "}
                {userInfo.agreePI === 1 ? "동의" : <s.NotAgreeText>비동의</s.NotAgreeText>}
              </s.InfoText>
              <s.InfoText>
                기부 금액: <s.DonationText>{userInfo.donation}원</s.DonationText>
              </s.InfoText>
            </s.InfoSection>
          </s.InfoWrapper>
          {/* 사용자 점수 관리 */}
          {/* 스텝 팀 관리 폼 */}
          {userInfo.teamId === "-" && teamList !== null ? (
            <s.UserViewWrapper>
              <UserScoreForm userInfo={userInfo} />
              <StepManageTeam userInfo={userInfo} teamList={teamList} />
            </s.UserViewWrapper>
          ) : (
            <div />
          )}
        </s.Container>
      )}
    </s.Wrapper>
  );
};

export default QRViewer;
