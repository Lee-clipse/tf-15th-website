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
      console.log(newUserInfo);
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

  const handleTeamExit = async () => {
    Swal.fire({
      title: `정말로 ${userInfo.teamName}팀에서 탈퇴하시겠습니까?`,
      text: "다시 되돌릴 수 없습니다.",
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",

      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        // API: Join User
        const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.EXIT_TEAM, {
          userId: userInfo.id,
          teamId: userInfo.teamId,
        });
        if (Number(res.data.code) === 200) {
          setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            teamId: "-",
            teamName: "-",
          }));
          loadTeamList();
          Swal.fire(`${userInfo.teamName}팀에서 탈퇴되었습니다.`, "", "success");
        }
      }
    });
  };

  const handleGiveGoods = async () => {
    // API: Join User
    const res = await axios.post(ENV.SERVER_PROD_DOMAIN + API.GIVE_GOODS, {
      userId: userInfo.id,
    });
    if (Number(res.data.code) !== 200) {
      Swal.fire("API 오류", "API: Join User", "error");
      return;
    }
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      isReceived: 1,
    }));
    Swal.fire("굿즈 수령 완료!", "축하의 말을 전해주세요!", "success");
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
                {Number(userInfo.agreePI) % 2 === 0 ? (
                  <s.NotAgreeText>비동의</s.NotAgreeText>
                ) : (
                  "동의"
                )}
              </s.InfoText>
              <s.InfoText>
                기부 금액: <s.DonationText>{userInfo.donation}원</s.DonationText>
              </s.InfoText>
            </s.InfoSection>
            {userInfo.isCleared === "true" && (
              <s.ClearedSection>
                <s.ClearedText>제로게임 클리어 성공!!</s.ClearedText>
                {Number(userInfo.isReceived) === 0 ? (
                  <s.GiveGoodsButtonWrapper>
                    <s.ReceivedText>굿즈 수령이 필요합니다!</s.ReceivedText>
                    <s.GiveGoodsButton onClick={handleGiveGoods}>굿즈 주기</s.GiveGoodsButton>
                  </s.GiveGoodsButtonWrapper>
                ) : (
                  <s.ReceivedText>이미 굿즈를 지급 받았습니다.</s.ReceivedText>
                )}
              </s.ClearedSection>
            )}
          </s.InfoWrapper>
          {/* 사용자 점수 관리 */}
          {/* 스텝 팀 관리 폼 */}
          {userInfo.teamId === "-" ? (
            <s.UserViewWrapper>
              <UserScoreForm userInfo={userInfo} />
              {teamList && <StepManageTeam userInfo={userInfo} teamList={teamList} />}
            </s.UserViewWrapper>
          ) : (
            <s.UserViewWrapper>
              <UserScoreForm userInfo={userInfo} />
              <s.SimpleTeamInfoSection>
                <s.TeamName>소속 팀: {userInfo.teamName}</s.TeamName>
                <s.TeamScore>팀 점수: {userInfo.teamScore} 점</s.TeamScore>
              </s.SimpleTeamInfoSection>
              <s.TeamExitButtonWrapper onClick={handleTeamExit}>
                <s.TeamExitButton>팀 탈퇴</s.TeamExitButton>
              </s.TeamExitButtonWrapper>
            </s.UserViewWrapper>
          )}
        </s.Container>
      )}
    </s.Wrapper>
  );
};

export default QRViewer;
