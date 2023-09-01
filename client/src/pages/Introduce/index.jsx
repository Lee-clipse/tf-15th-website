import React from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import IntroSection from "../../component/IntroSection";
import EventIntroSection from "../../component/EventIntroSection";

const IntroducePage = () => {
  return (
    <PageTemplate>
      <TopNavBar title={"소개"} />
      <s.Wrapper>
        <s.Container>
          <IntroSection />
          <EventIntroSection />
        </s.Container>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default IntroducePage;
