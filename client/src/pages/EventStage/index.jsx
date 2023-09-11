import React from "react";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";

const EventStagePage = () => {
  return (
    <PageTemplate>
      <TopNavBar title={"무대"} fixed={false} />
      <img src="/assets/stage_poster1.svg" alt="stage_poster1" />
      <img src="/assets/stage_poster2.svg" alt="stage_poster2" />
    </PageTemplate>
  );
};

export default EventStagePage;
