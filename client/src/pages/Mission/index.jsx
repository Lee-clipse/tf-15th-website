import React, { useEffect } from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import { Link } from "react-router-dom";
import { RoutePath } from "@constants/enums";

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <TopNavBar title={"제로게임 미션"} fixed={false} />
      <s.Wrapper>
        <s.Poster src="/assets/zerogame_poster1.svg" />
        <s.Poster src="/assets/zerogame_poster2.svg" />
        <s.Poster src="/assets/zerogame_poster3.svg" />
        <Link to={RoutePath.ZEROGAME}>
          <s.ButtonWrapper>
            <s.ZeroGameButton src="/assets/zerogame_go_button.svg" />
          </s.ButtonWrapper>
        </Link>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default MissionPage;
