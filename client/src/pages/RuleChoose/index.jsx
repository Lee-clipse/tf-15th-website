import React from "react";
import * as s from "./style";
import { Link } from "react-router-dom";
import { RoutePath } from "@constants/enums";

import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";

const RuleChoosePage = () => {
  return (
    <PageTemplate>
      <TopNavBar title={"접수"} />
      <s.Wrapper>
        <s.Container>
          <s.ButtonSection>
            <Link to={RoutePath.REGISTER}>
              <s.ParticipantButton>
                <s.ButtonInnerText>참가자</s.ButtonInnerText>
              </s.ParticipantButton>
            </Link>
            <s.Description>0923 행사를 즐기는 참가자로 신청할래요!</s.Description>
          </s.ButtonSection>
          <s.BR />
          <s.ButtonSection>
            <Link to={RoutePath.STEP_GOOGLE_FORM}>
              <s.StepButton>
                <s.ButtonInnerText>스텝</s.ButtonInnerText>
              </s.StepButton>
            </Link>
            <s.Description>준비 및 행사를 돕는 스텝으로 신청할래요!</s.Description>
          </s.ButtonSection>
        </s.Container>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default RuleChoosePage;
