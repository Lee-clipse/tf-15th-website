import React from "react";
import * as s from "./style";
import { Link } from "react-router-dom";
import { RoutePath } from "@constants/enums";

const StepRegisterSuccess = () => {
  return (
    <s.Container>
      <s.Text>스텝 등록이 완료되었습니다!</s.Text>
      <s.Text>지원해주셔서 감사합니다!</s.Text>
      <s.Description>
        현재 사용하고 계신 기기의 브라우저에 서버가 인식할 수 있도록 스텝 인증 키를 삽입했습니다.
      </s.Description>
      <s.Description>여느 행사의 명찰표라고 생각하시면 됩니다 :{")"}</s.Description>
      <Link to={RoutePath.MAIN}>
        <s.Button>홈으로 돌아가기</s.Button>
      </Link>
    </s.Container>
  );
};

export default StepRegisterSuccess;
