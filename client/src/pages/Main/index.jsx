import React from "react";
import PageTemplate from "../PageTemplate";
import MainLogo from "@components/MainLogo";
import MainLinker from "@components/MainLinker";
import YoutubeSection from "@components/YoutubeSection";

const MainPage = () => {
  return (
    <PageTemplate>
      <MainLogo />
      <MainLinker />
      <YoutubeSection />
    </PageTemplate>
  );
};

export default MainPage;
