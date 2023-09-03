import React, { useEffect } from "react";
import * as s from "./style";
import { Link } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import { motion } from "framer-motion";

import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";

const RuleChoosePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <TopNavBar title={"접수"} />
      <s.Wrapper>
        <s.Container>
          <s.ButtonSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link to={RoutePath.REGISTER}>
              <s.ParticipantButton>
                <s.ButtonInnerText>참가자</s.ButtonInnerText>
              </s.ParticipantButton>
            </Link>
            <s.Description>0923 행사를 즐기는 참가자로 신청할래요!</s.Description>
          </s.ButtonSection>
          <s.BR />
          <s.ButtonSection as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link to={RoutePath.STEP_GOOGLE_FORM}>
              <s.StepButton>
                <s.StepButtonInnerText>스텝</s.StepButtonInnerText>
              </s.StepButton>
            </Link>
            <s.Description>준비 및 행사를 돕는 스텝으로 신청할래요!</s.Description>
          </s.ButtonSection>
          <s.BR />
          <s.ReQRWrapper as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <s.ReQRLable>이미 참가자로 접수하였다면?</s.ReQRLable>
            <Link to={RoutePath.RECONFIRM_QR}>
              <s.ReQRLinker>내 QR 코드 보러가기</s.ReQRLinker>
            </Link>
          </s.ReQRWrapper>
        </s.Container>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default RuleChoosePage;
