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
      <TopNavBar title={"제로게임 미션"} fixed={false} />
      <s.Wrapper>
        <s.poster src="/assets/zerogame_poster1.svg" />
        <s.poster src="/assets/zerogame_poster2.svg" />
        <s.BoardPoster src="/assets/zerogame_poster3.svg" />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default MissionPage;
