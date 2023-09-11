import React from "react";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";

const EventGroupPage = () => {
  return (
    <PageTemplate>
      <TopNavBar title={"소그룹"} fixed={false} />
      <img src="/assets/group_poster.svg" alt="group_poster" />
    </PageTemplate>
  );
};

export default EventGroupPage;
