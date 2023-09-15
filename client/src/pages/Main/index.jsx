import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate";
import MainLogo from "@components/MainLogo";
import MainLinker from "@components/MainLinker";
import YoutubeSection from "@components/YoutubeSection";
import RegisterButton from "@components/RegisterButton";
import ScrollInducer from "@components/ScrollInducer";
import CountDown from "../../component/CountDown";
import moment from "moment";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
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
