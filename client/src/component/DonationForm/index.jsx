import React from "react";
import * as s from "./style";

const DonationForm = ({ onInputDonation }) => {
  return (
    <s.Wrapper>
      <s.Title>6. 기부금 계좌번호를 확인하시고 기부금액을 선택해주세요.</s.Title>
      <s.DonationWrapper>
        <s.DonationContents>
          <s.BlueHighlightText>부산은행 101-2037-1968-05</s.BlueHighlightText> <br />
          십대의벗청소년교육센터
        </s.DonationContents>
        <s.DonationContents>
          *입급자명은 제출한 이름과 동일하게 입금 부탁드립니다. (ex) 이름: 홍길동 / 입금자명: 홍길동
        </s.DonationContents>
      </s.DonationWrapper>

      <s.Title>기부금 입력</s.Title>
      <s.InputWrapper>
        <s.Input
          type="text"
          placeholder="입력"
          onChange={(e) => onInputDonation(e.target.value)}
        ></s.Input>
        <s.MoneyFormText>원</s.MoneyFormText>
      </s.InputWrapper>
    </s.Wrapper>
  );
};

export default DonationForm;
