import React, { useState } from "react";
import * as s from "./style";
import * as ds from "./diceStyle";
import { DiceTransform } from "@constants/enums";
import axios from "axios";
import { ENV, API } from "@constants/env";
import Swal from "sweetalert2";
import { indexConverter } from "./indexConverter";

const DiceModal = ({ closeModal }) => {
  const [rolled, setRolled] = useState(false);
  const [styles, setStyles] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  // 모달 닫기 << 상위 컴포넌트 동작
  const handleModalClose = () => {
    closeModal(nextIndex);
  };

  // 주사위 굴리기 함수
  const rollDice = async () => {
    // API: Roll Dice
    const res = await axios.post(ENV.GAME_SERVER_PROD_DOMAIN + API.ROLL_DICE, {
      teamId: localStorage.getItem("teamId"),
    });
    if (Number(res.data.code) !== 200) {
      Swal.fire("API ERROR: Roll Dice", "인포데스크로 방문 제보 부탁드립니다.", "error");
      return;
    }

    const thisPrevIndex = Number(res.data.prevIndex);
    const thisNextIndex = Number(res.data.nextIndex);
    const indexGap = indexConverter(thisPrevIndex, thisNextIndex);

    setNextIndex(thisNextIndex);
    setStyles({ transform: DiceTransform[indexGap] });
    setRolled(true);
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.TopRow>
          <s.CloseButtonWrapper onClick={handleModalClose}>
            <s.CloseButton src="/assets/zerogame/close.svg" alt="close" />
          </s.CloseButtonWrapper>
        </s.TopRow>
        <s.DiceWrapper>
          <ds.Dice style={styles}>
            <div class="side ">
              <div class="dot one-1"></div>
            </div>
            <div class="side ">
              <div class="dot two-1"></div>
              <div class="dot two-2"></div>
            </div>
            <div class="side ">
              <div class="dot three-1"></div>
              <div class="dot three-2"></div>
              <div class="dot three-3"></div>
            </div>
            <div class="side ">
              <div class="dot four-1"></div>
              <div class="dot four-2"></div>
              <div class="dot four-3"></div>
              <div class="dot four-4"></div>
            </div>
            <div class="side ">
              <div class="dot five-1"></div>
              <div class="dot five-2"></div>
              <div class="dot five-3"></div>
              <div class="dot five-4"></div>
              <div class="dot five-5"></div>
            </div>
            <div class="side ">
              <div class="dot six-1"></div>
              <div class="dot six-2"></div>
              <div class="dot six-3"></div>
              <div class="dot six-4"></div>
              <div class="dot six-5"></div>
              <div class="dot six-6"></div>
            </div>
          </ds.Dice>
        </s.DiceWrapper>
        {!rolled && <s.RollButton onClick={rollDice}>가자!</s.RollButton>}
      </s.Container>
    </s.Wrapper>
  );
};

export default DiceModal;
