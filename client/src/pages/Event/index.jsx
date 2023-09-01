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
        <p>COMMING SOON</p>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default EventPage;
