/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import * as s from "./style";
import { ENV, API } from "@constants/env";
import { BoothViewer, IndexList } from "@constants/enums";
import axios from "axios";

const ZerogameViewerPage = () => {
  const [statusData, setStatusData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 마운트
    loadData();
  }, []);

  const loadData = async () => {
    // API: Get Every Map Data
    const mapRes = await axios.get(ENV.GAME_SERVER_PROD_DOMAIN + API.EVERY_MAP_DATA, {});
    // API: Get Every Team Score
    const teamRes = await axios.get(ENV.SERVER_PROD_DOMAIN + API.EVERY_TEAM_SCORE, {});
    const { indexMap } = mapRes.data;
    const scoreMap = teamRes.data;
    const object = {};
    Object.entries(indexMap).map((value, _) => {
      const [id, thisIndex] = value;
      if (object[thisIndex] === undefined) {
        object[thisIndex] = [{ id, score: scoreMap[id] }];
      } else {
        object[thisIndex].push({ id, score: scoreMap[id] });
      }
    });
    setStatusData(object);
  };

  return (
    <s.Wrapper>
      {statusData && (
        <s.Container>
          <s.MapWrapper>
            <s.MapLabel>제로게임 현황</s.MapLabel>
            <s.BoothStautsWrapper>
              <BoothList />
              <s.StatusWrapper>
                {IndexList.map((numIndex, index) => {
                  const strIndex = String(numIndex);
                  const statusList = statusData[strIndex];
                  if (statusList === undefined) {
                    return (
                      <s.StatusRow>
                        <s.TeamName>-</s.TeamName>
                        <s.TeamScore></s.TeamScore>
                      </s.StatusRow>
                    );
                  }
                  return (
                    <s.StatusRow>
                      {statusList.map((status, index) => {
                        return (
                          <s.StatusMiniRow>
                            <s.TeamName>{status.id}</s.TeamName>
                            <s.TeamScore>({status.score})</s.TeamScore>
                          </s.StatusMiniRow>
                        );
                      })}
                    </s.StatusRow>
                  );
                })}
              </s.StatusWrapper>
            </s.BoothStautsWrapper>
          </s.MapWrapper>

          <s.ClearedWrapper>
            <s.ClearedLabel>클리어 팀 명단</s.ClearedLabel>
          </s.ClearedWrapper>
        </s.Container>
      )}
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

export default ZerogameViewerPage;
