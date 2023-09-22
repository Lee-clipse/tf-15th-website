import React, { useEffect, useState } from "react";
import PageTemplate from "../PageTemplate";
import MainLogo from "@components/MainLogo";
import MainLinker from "@components/MainLinker";
import YoutubeSection from "@components/YoutubeSection";
import RegisterButton from "@components/RegisterButton";
import ScrollInducer from "@components/ScrollInducer";
import moment from "moment";
import { MainPopup } from "@components/MainPopup";
import ComingMap from "../../component/ComingMap";

const MainPage = () => {
  const [showMainPop, setShowMainPop] = useState(false);
  const HOME_VISITED = localStorage.getItem("homeVisited");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const today = new Date();
    const handleMainPop = () => {
      if (HOME_VISITED && HOME_VISITED > today) {
        // 현재 date가 localStorage의 시간보다 크면 return
        return;
      }
      if (!HOME_VISITED || HOME_VISITED < today) {
        // 저장된 date가 없거나 today보다 작다면 popup 노출
        setShowMainPop(true);
      }
    };
    window.setTimeout(handleMainPop, 1000); // 1초 뒤 실행
  }, [HOME_VISITED]);

  return (
    <PageTemplate>
      {showMainPop && <MainPopup setShowMainPop={setShowMainPop} />}
      <MainLogo />
      <ComingMap />
      <MainLinker />
      <YoutubeSection />
      <RegisterButton />
      <ScrollInducer />
    </PageTemplate>
  );
};

export default MainPage;
