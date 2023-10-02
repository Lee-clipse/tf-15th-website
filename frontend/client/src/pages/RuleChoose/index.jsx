import React, { useEffect } from "react";
import * as s from "./style";
import { motion } from "framer-motion";

import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import Swal from "sweetalert2";

const RuleChoosePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServerBlock = () => {
    Swal.fire("신청 기간이 아닙니다!", "2024년 TF을 기대해주세요!", "info");
  };

  return (
    <PageTemplate>
      <TopNavBar title={"접수"} />
      <s.Wrapper>
        <s.Container>
          <s.ButtonSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <s.ParticipantButton onClick={handleServerBlock}>
              <s.ButtonInnerText>참가자</s.ButtonInnerText>
            </s.ParticipantButton>
            <s.Description>0923 행사를 즐기는 참가자로 신청할래요!</s.Description>
          </s.ButtonSection>
          <s.BR />
          <s.ButtonSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <s.StepButton onClick={handleServerBlock}>
              <s.StepButtonInnerText>스텝</s.StepButtonInnerText>
            </s.StepButton>
            <s.Description>준비 및 행사를 돕는 스텝으로 신청할래요!</s.Description>
          </s.ButtonSection>
          <s.BR />
          <s.ReQRWrapper as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <s.ReQRLable>이미 참가자로 접수하였다면?</s.ReQRLable>
            <s.ReQRLinker onClick={handleServerBlock}>내 QR 코드 보러가기</s.ReQRLinker>
          </s.ReQRWrapper>
        </s.Container>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default RuleChoosePage;
