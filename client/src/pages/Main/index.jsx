import React from "react";
import PageTemplate from "../PageTemplate";
import MainLogo from "../../component/MainLogo/index";
import MainLinker from "../../component/MainLinker/index";
import YoutubeSection from "../../component/YoutubeSection";

const Main = () => {
  return (
    <PageTemplate>
      <MainLogo></MainLogo>
      <MainLinker></MainLinker>
      <YoutubeSection></YoutubeSection>
    </PageTemplate>
  );
};

export default Main;
