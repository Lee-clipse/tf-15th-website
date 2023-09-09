import React, { useEffect } from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <TopNavBar title={"제로게임 미션"} />
      <s.poster1 src="/assets/zerogame_poster1.svg" />
      <s.poster1 src="/assets/zerogame_poster2.svg" />
      <s.poster1 src="/assets/zerogame_poster3.svg" />
    </PageTemplate>
  );
};

export default MissionPage;
