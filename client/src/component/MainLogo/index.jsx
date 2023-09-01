import React from "react";
import * as s from "./style";
import RegisterButton from "@components/RegisterButton";
import { motion } from "framer-motion";

const MainLogo = () => {
  return (
    <s.LogoWrapper>
      <motion.div
        className="logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <s.LogoImage src="/assets/main_logo.png" alt="메인로고" />
      </motion.div>
      <motion.div
        className="logo-text"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        <s.LogoMessage>"청년이 건강해야 부산이 산다."</s.LogoMessage>
      </motion.div>
      <RegisterButton></RegisterButton>
    </s.LogoWrapper>
  );
};

export default MainLogo;
