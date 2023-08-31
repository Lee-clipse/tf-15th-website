import React from "react";
import * as s from "./style";

const Agreement = ({ agreement, onAgreementChange }) => {
  return (
    <s.Wrapper>
      <s.AgreementWrapper>
        <s.Title>개인정보 수집 및 활용 동의서</s.Title>
        <s.AgreementContents>
          1. 수정 및 활용 개인정보 항목 : 개인정보보호법 시행령 제15조에 의거 이름, 전화번호 등
          &lt;청건부산&gt; 참여 희망자 정보
        </s.AgreementContents>
        <s.AgreementContents>
          2. 개인정보의 수집 및 활용 목적 : 개인정보의 수집은 &lt;청건부산&gt; 당일 참가자분들의
          인원 규모 파악 및 주기적인 청건부산 행사의 정보 발송이라는 목적을 위하여 수집됩니다.
        </s.AgreementContents>
        <s.AgreementContents>
          3. 개인정보의 보유 및 활동 기간 : &lt;청건부산&gt; 행사가 끝난 이후 즉시 폐기됩니다.
        </s.AgreementContents>
        <s.AgreementContents>
          4. 개인정보 수집동의 거부의 권리 : 개인정보 수집 동의를 거부할 수 있으며, 동의 거부 시
          참여 대상에서 제외됩니다.
        </s.AgreementContents>
      </s.AgreementWrapper>
      <s.SectionWrapper>
        <s.Title>5. 개인정보 제공에 동의하십니까?</s.Title>
        <s.RadioLabel>
          <s.RadioText
            type="radio"
            name="agreement"
            value="예"
            checked={agreement === "예"}
            onChange={onAgreementChange}
          />
          예
        </s.RadioLabel>
        <s.RadioLabel>
          <s.RadioText
            type="radio"
            name="agreement"
            value="아니오"
            checked={agreement === "아니오"}
            onChange={onAgreementChange}
          />
          아니오
        </s.RadioLabel>
      </s.SectionWrapper>
    </s.Wrapper>
  );
};

export default Agreement;
