import React from "react";
import { Link } from "react-router-dom";
import * as s from "./style";
import { RoutePath } from "@constants/enums";

const RegisterButton = () => {
  return (
    <s.ButtonWrapper>
      <Link to={RoutePath.RULE_CHOOSE}>
        <s.ButtonContainer>
          <s.ButtonText>접수하러 가기</s.ButtonText>
        </s.ButtonContainer>
      </Link>
    </s.ButtonWrapper>
  );
};

export default RegisterButton;
