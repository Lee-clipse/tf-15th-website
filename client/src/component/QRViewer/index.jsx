/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as s from "./style";
import axios from "axios";
import { ENV, API } from "@constants/env";

const QRViewer = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);

  const handleUserInfoLoad = async () => {
    const res = await axios.get(ENV.SERVER_DEV_DOMAIN + API.USER_INFO, {
      params: { userId },
    });
    const newUserInfo = JSON.parse(res.data.userInfo);
    setUserInfo(newUserInfo);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // 랜더링 전 데이터 받아오기
    handleUserInfoLoad();
  }, []);

  return (
    <s.Wrapper>
      <s.Container>
        <s.InfoWrapper>
          {userInfo && (
            <s.InfoSection>
              <s.InfoText>{userInfo.name}</s.InfoText>
              <s.InfoText>{userInfo.age}</s.InfoText>
              <s.InfoText>{userInfo.phoneNumber}</s.InfoText>
              <s.InfoText>{userInfo.location}</s.InfoText>
              <s.InfoText>개인정보 제공 {userInfo.agreePI === 1 ? "동의" : "비동의"}</s.InfoText>
              <s.InfoText>기부 금액: {userInfo.donation}만원</s.InfoText>
            </s.InfoSection>
          )}
        </s.InfoWrapper>
      </s.Container>
    </s.Wrapper>
  );
};

export default QRViewer;
