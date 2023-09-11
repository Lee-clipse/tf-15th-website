import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import * as s from "./style";

const EventGroupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <s.Wrapper>
        <TopNavBar title={"소그룹"} />
        <s.Poster src="/assets/group_poster.svg" alt="group_poster" />
      </s.Wrapper>{" "}
    </PageTemplate>
  );
};

export default EventGroupPage;
