import React from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";

const IntroducePage = () => {
  return (
    <PageTemplate>
      <TopNavBar title={"소개"} />
      <s.Wrapper>Intro</s.Wrapper>
    </PageTemplate>
  );
};

export default IntroducePage;
