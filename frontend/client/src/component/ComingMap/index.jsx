import React from "react";
import * as s from "./style";

const ComingMap = () => {
  return (
    <s.Wrapper>
      <s.Label>오시는 길</s.Label>
      <s.LittleLabel>9월 23일 15회 TF 청건부산 행사</s.LittleLabel>
      <s.LittleLabel>주차 및 오시는 길 안내</s.LittleLabel>
      <s.ComingMap src="/assets/main/coming_map.webp" alt="coming_map" />
      <s.TextWrapper>
        <s.Text>
          행사 당일 교통이 혼잡하고, 송상현 광장 인근 주차가 어려울 것으로 예상됩니다. 환경을
          생각하여 가급적 대중교통을 이용하여 주시기 바랍니다.
        </s.Text>
        <s.Text>
          행사 진행 시간동안 시민공원 주차장과 송상현광장 간{" "}
          <s.HighLight>셔틀 운행의 승하차 지점</s.HighLight>은 위 지도를 참고해주시기 바랍니다.{" "}
        </s.Text>
        <s.SmallText>
          [ 셔틀은 <s.HighLight>오후 3시반 - 8시반</s.HighLight> 운행 예정입니다. ]
        </s.SmallText>
        <s.TitleText>[대중교통 이용]</s.TitleText>
        <s.Text>• 지하철 : 1호선 부전역 하차 후 8번출구 </s.Text>
        <s.Text>• 시내버스 : 송상현 광장 시내버스 정류소 하차 </s.Text>
        <s.MiniText>
          5-1, 10, 20, 29, 31, 33, 43, 52, 57, 62, 77, 80, 86, 87, 99, 110-1, 111, 129-1, 141, 급행
          1002
        </s.MiniText>
      </s.TextWrapper>
    </s.Wrapper>
  );
};

export default ComingMap;
