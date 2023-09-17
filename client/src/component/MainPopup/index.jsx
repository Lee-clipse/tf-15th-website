import React, { useState } from "react";
import * as s from "./style";

//props로 setShowMainPop을 받아서 사용
export const MainPopup = ({ setShowMainPop }) => {
  const [checked, setChecked] = useState(false);

  const closePop = () => {
    // 24 시간 동안 보지 않기
    if (checked) {
      const expires = new Date();
      localStorage.setItem("homeVisited", expires.setHours(expires.getHours() + 24));
    }
    setShowMainPop(false);
  };

  const handleChange = (e) => {
    const changed = e.target.checked;
    changed ? setChecked(true) : setChecked(false);
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.CloseButtonWrapper>
          <s.CloseButton onClick={closePop} src="/assets/zerogame/close.svg" alt="close" />
        </s.CloseButtonWrapper>
        <s.Title>청건부산 신규 기부처 안내</s.Title>
        <s.Poster src="/assets/donate_usage/poster5.webp" alt="donate_usage" />
        <s.Close24ButtonWrpper>
          <s.CheckBox type="checkbox" onChange={handleChange} />
          <s.Close24Button>오늘 하루 열지 않기</s.Close24Button>
        </s.Close24ButtonWrpper>
      </s.Container>
    </s.Wrapper>
  );
};
