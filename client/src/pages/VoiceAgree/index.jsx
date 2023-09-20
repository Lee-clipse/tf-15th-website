import React, { useState } from "react";
import * as s from "./style";

const VoiceAgreePage = () => {
  const [agreePI, setAgreePI] = useState("-1");

  const onAgreementChange = (e) => {
    setAgreePI(e.target.value);
  };

  const handleButtonClick = () => {
    if (agreePI === "2") {
      console.log("동의 버튼이 눌렸습니다. 목소리 정보를 사용할 수 있습니다.");
    }
    if (agreePI === "0") {
      console.log("동의 버튼이 눌렸지만 동의하지 않았습니다.");
    } else {
      console.log();
    }
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.Label>목소리 활용 정보 동의서</s.Label>
        <s.Text>
          ※ 지킴이들의 외침 부스 참여 시 목소리 활용에 대한 개인정보활용을 동의하며, 사용된 목소리
          및 영상 내용은 투게더페스티벌 홍보에 활용될 수 있습니다.
        </s.Text>
        <s.CheckWrapper>
          <s.AgreeCheck
            type="radio"
            name="agreePI"
            value="2"
            checked={agreePI === "2"}
            onChange={onAgreementChange}
          />
          <s.AgreeText>동의</s.AgreeText>
          <s.AgreeCheck
            type="radio"
            name="agreePI"
            value="0"
            checked={agreePI === "0"}
            onChange={onAgreementChange}
          />
          <s.AgreeText>비동의</s.AgreeText>
        </s.CheckWrapper>
        <s.ButtonWrapper>
          <s.LinkButton onClick={handleButtonClick}>카카오톡으로 이동하기</s.LinkButton>
        </s.ButtonWrapper>
      </s.Container>
    </s.Wrapper>
  );
};

export default VoiceAgreePage;
