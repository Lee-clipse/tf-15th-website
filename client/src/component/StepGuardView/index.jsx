import React from "react";
import * as s from "./style";
import { Link } from "react-router-dom";
import { RoutePath } from "@constants/enums";

const StepGuardView = () => {
  return (
    <s.Wrapper>
      <s.Container>
        <s.Label>스텝으로 인증되지 않은 사용자입니다.</s.Label>
        <Link to={RoutePath.MAIN}>
          <s.Button>홈으로 돌아가기</s.Button>
        </Link>
      </s.Container>
    </s.Wrapper>
  );
};

export default StepGuardView;
