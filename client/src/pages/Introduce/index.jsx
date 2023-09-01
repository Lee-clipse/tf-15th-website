import React, { useEffect } from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import IntroSection from "../../component/IntroSection";
import EventIntroSection from "../../component/EventIntroSection";

const IntroducePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
