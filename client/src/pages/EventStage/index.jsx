import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import * as s from "./style";

const EventStagePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <TopNavBar title={"무대"} />
      <s.Wrapper>
        <s.Poster src="/assets/stage_poster1.svg" alt="stage_poster1" />
        <s.Poster src="/assets/stage_poster2.svg" alt="stage_poster2" />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default EventStagePage;
