import React, { useEffect, useState } from "react";
import moment from "moment";
import * as s from "./style";

const CountDown = ({ timeInfo }) => {
  const [timerText, setTimerText] = useState(timeInfo.countdownText);
  const [timerDayText, setTimerDayText] = useState(timeInfo.countdownDayText);

  useEffect(() => {
    // D-Day 설정
    const targetDate = moment("2023-09-23 00:00:00");

    const countDownTimer = setInterval(() => {
      const now = moment();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countDownTimer);
        setTimerText("D-Day 종료");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const hoursString = String(hoursValue).padStart(2, "0");

      const minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const minutesString = String(minutesValue).padStart(2, "0");

      const secondsValue = Math.floor((distance % (1000 * 60)) / 1000);
      const secondsString = String(secondsValue).padStart(2, "0");

      const countdownDayText = `D - ${days}`;
      const countdownText = `${hoursString}:${minutesString}:${secondsString}`;
      setTimerText(countdownText);
      setTimerDayText(countdownDayText);
    }, 1000);

    return () => {
      clearInterval(countDownTimer);
    };
  }, []);

  return (
    <s.Wrapper>
      <s.Label>0923 청건부산 축제까지</s.Label>
      <s.TimerWrapper>
        <s.TimerDayText>{timerDayText}</s.TimerDayText>
        <s.TimerText>{timerText}</s.TimerText>
      </s.TimerWrapper>
      <s.MeetText>서면 송상현 광장에서 만나요!</s.MeetText>
    </s.Wrapper>
  );
};

export default CountDown;
