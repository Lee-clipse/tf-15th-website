/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";
import StepManageTeam from "../StepManageTeam";

const QRViewer = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [teamList, setTeamList] = useState(null);

  const handleUserInfoLoad = async () => {
    const res = await axios.get(ENV.SERVER_PROD_DOMAIN + API.USER_INFO, {
      params: { userId },
    });
    const newUserInfo = res.data.userInfo;
    const newTeamList = res.data.teamList;
    setUserInfo(newUserInfo);
    setTeamList(newTeamList);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // 랜더링 전 데이터 받아오기
    handleUserInfoLoad();
  }, []);

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
                기부 금액: <s.DonationText>{userInfo.donation}만원</s.DonationText>
              </s.InfoText>
            </s.InfoSection>
          </s.InfoWrapper>
          {/* 스텝 팀 관리 폼 */}
          <StepManageTeam userInfo={userInfo} teamList={teamList} />
        </s.Container>
      )}
    </s.Wrapper>
  );
};

export default QRViewer;
