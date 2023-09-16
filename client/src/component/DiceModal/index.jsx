import React, { useState } from "react";
import * as s from "./style";
import * as ds from "./diceStyle";
import { DiceTransform } from "../../constants/enums";

const DiceModal = ({ closeModal, nextIndex }) => {
  const [rolled, setRolled] = useState(false);
  const [styles, setStyles] = useState(null);

  // 모달 닫기 << 상위 컴포넌트 동작
  const handleModalClose = () => {
    closeModal();
  };

  // 주사위 굴리기 함수
  const rollDice = () => {
    console.log(nextIndex);
    setStyles({ transform: DiceTransform[nextIndex] });
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
