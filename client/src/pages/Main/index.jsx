import React, { useEffect, useState } from "react";
import PageTemplate from "../PageTemplate";
import MainLogo from "@components/MainLogo";
import MainLinker from "@components/MainLinker";
import YoutubeSection from "@components/YoutubeSection";
import RegisterButton from "@components/RegisterButton";
import ScrollInducer from "@components/ScrollInducer";
import CountDown from "@components/CountDown";
import moment from "moment";
import { MainPopup } from "@components/MainPopup";

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
      <CountDown timeInfo={getDdayTime()} />
      <MainLinker />
      <YoutubeSection />
      <RegisterButton />
      <ScrollInducer />
    </PageTemplate>
  );
};

const getDdayTime = () => {
  const targetDate = moment("2023-09-23 00:00:00");

  const now = moment();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const hoursString = String(hoursValue).padStart(2, "0");

  const minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const minutesString = String(minutesValue).padStart(2, "0");

  const secondsValue = Math.floor((distance % (1000 * 60)) / 1000);
  const secondsString = String(secondsValue).padStart(2, "0");

  const countdownDayText = `D - ${days}`;
  const countdownText = `${hoursString}:${minutesString}:${secondsString}`;
  return { countdownDayText, countdownText };
};

export default MainPage;
