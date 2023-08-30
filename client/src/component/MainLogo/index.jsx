import React from "react";
import * as s from "./style";

const MainLogo = () => {
  return (
    <s.LogoWrapper>
      <s.LogoImage src="/assets/main_logo.png" alt="메인로고" />
      <s.LogoMessage>청년이 건강해야 부산이 산다</s.LogoMessage>
    </s.LogoWrapper>
  );
};

export default MainLogo;
