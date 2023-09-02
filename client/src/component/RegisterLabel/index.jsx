import React from "react";
import * as s from "./style";

const RegisterLabel = () => {
  return (
    <s.LabelWrapper>
      <s.LabelTitle src="/assets/main_logo_row.png" alt="main_logo_row"></s.LabelTitle>
      <s.LabelText>
        안녕하십니까 청건부산입니다. <br />
        다음의 설문지는 당일 참가자분들의 인원 규모 파악을 위해 쓰여졌습니다. 각 항목을 잘
        읽어보시고 제출 부탁드립니다. 바쁜 시간 내주셔서 감사합니다. <br />
        당일 행사 때 뵙겠습니다.
      </s.LabelText>
    </s.LabelWrapper>
  );
};

export default RegisterLabel;
