import React, { useEffect } from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";

const EventPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <TopNavBar title={"이벤트"} />
      <s.Wrapper>
        <s.poster src="/assets/event_main.png" />
        <s.Button>
          소그룹 소개
          <s.ArrowIcon src="/assets/right_arrow.svg" />
        </s.Button>
        <s.Button>
          스테이지 액티비티 소개
          <s.ArrowIcon src="/assets/right_arrow.svg" />
        </s.Button>
        <s.Button>
          제로게임 소개
          <s.ArrowIcon src="/assets/right_arrow.svg" />
        </s.Button>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default EventPage;
