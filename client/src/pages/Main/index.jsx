import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate";
import MainLogo from "@components/MainLogo";
import MainLinker from "@components/MainLinker";
import YoutubeSection from "@components/YoutubeSection";
import RegisterButton from "@components/RegisterButton";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <MainLogo />
      <MainLinker />
      <YoutubeSection />
      <RegisterButton />
    </PageTemplate>
  );
};

export default MainPage;
