import React from "react";
import * as s from "./style";

const IntroSection = () => {
  return (
    <s.IntroSection>
      <s.StampWrpper>
        <s.Stamp src={`/assets/logo_stamp.svg`} alt={`logo_stamp`} />
      </s.StampWrpper>

      <s.TextWrapper>
        <s.Text>
          청건부산 행사는 부산의 20~30대 부산청년들 100여명이 중심이 되어, 모든 기획과 재정, 운영 및
          홍보까지 직접 준비하는 행사입니다.
          <br />
          행사 장소인 송상현 광장은 예로부터 모너머 고개 불렸으며, 부산의 다양한 정체성이 나뉘는
          경계지점이자, 다시 하나로 모여드는 중심지였습니다.
          <br />이 지역에서 9월 23일 부산 청년들이 모여, 삶, 환경, 부산의 미래에 대한 목소리를 내며
          청년으로서의 정체성인 자유, 진취, 도전의 메세지를 던지고자 합니다.
        </s.Text>
      </s.TextWrapper>
    </s.IntroSection>
  );
};

export default IntroSection;
