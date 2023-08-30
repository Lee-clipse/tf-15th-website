import React from "react";
import * as s from "./style";
import RegisterButton from "../RegisterButton";

const MainLogo = () => {
  return (
    <s.LogoWrapper>
      <s.LogoImage src="/assets/main_logo.png" alt="메인로고" />
      <s.LogoMessage>"청년이 건강해야 부산이 산다."</s.LogoMessage>
      <RegisterButton></RegisterButton>
    </s.LogoWrapper>
  );
};

export default MainLogo;
