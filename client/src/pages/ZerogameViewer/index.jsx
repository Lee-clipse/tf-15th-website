import React, { useState, useEffect } from "react";
import * as s from "./style";
import { ENV, API } from "@constants/env";
import { Booth } from "@constants/enums";
import Swal from "sweetalert2";
import axios from "axios";
import { BoothViewer } from "../../constants/enums";

const ZerogameViewerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // 마운트
    loadMapData();
  }, []);

  const loadMapData = async () => {};

  return (
    <s.Wrapper>
      <s.Container>
        <s.MapWrapper>
          <s.MapLabel>제로게임 현황</s.MapLabel>
          <s.BoothStautsWrapper>
            <BoothList />
            <StatusList />
          </s.BoothStautsWrapper>
        </s.MapWrapper>

        <s.ClearedWrapper>
          <s.ClearedLabel>클리어 팀 명단</s.ClearedLabel>
        </s.ClearedWrapper>
      </s.Container>
    </s.Wrapper>
  );
};

// Booth 객체의 값들을 랜더링하는 BoothList 컴포넌트를 정의합니다.
const BoothList = () => {
  const battleBoothList = [11, 31, 32, 43];
  return (
    <s.BoothWrapper>
      {Object.entries(BoothViewer).map((value, index) => {
        const mapIndex = Number(value[0]);
        const title = value[1];
        if (mapIndex % 10 === 0) {
          return <s.WaitingZoneTitle key={index}>{title}</s.WaitingZoneTitle>;
        }
        if (battleBoothList.includes(mapIndex)) {
          return (
            <s.BoothTitle key={index}>
              <s.BattleBoothTitle key={index}>대결! </s.BattleBoothTitle>
              {title}
            </s.BoothTitle>
          );
        }
        return <s.BoothTitle key={index}>{title}</s.BoothTitle>;
      })}
    </s.BoothWrapper>
  );
};

const StatusList = () => {
  return <s.StatusWrapper></s.StatusWrapper>;
};

export default ZerogameViewerPage;
