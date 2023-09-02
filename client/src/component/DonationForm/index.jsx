import React from "react";
import * as s from "./style";

const DonationForm = ({ onSelectDonation }) => {
  const donationAmounts = [
    { value: "2", label: "2만원" },
    { value: "5", label: "5만원" },
    { value: "10", label: "10만원" },
    { value: "15", label: "15만원" },
    { value: "0", label: "기부금 없음" },
  ];

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
        <s.BoldText>
          ※ 필독 : 당일 청건부산 부스 및 제로게임 참가와 굿즈 제공은 기부금을 낸 기부자에 한해서만
          제공됩니다. 기부금 없음 선택시, 당일 청건부산 부스 및 제로게임 참가, 굿즈 제공의 혜택은
          제공되지 않습니다.
        </s.BoldText>
      </s.DonationWrapper>
      <s.Select onChange={(e) => onSelectDonation(e.target.value)}>
        <option value="">기부금 선택</option>
        {donationAmounts.map((donation, index) => (
          <option key={index} value={donation.value}>
            {donation.label}
          </option>
        ))}
      </s.Select>
    </s.Wrapper>
  );
};

export default DonationForm;
