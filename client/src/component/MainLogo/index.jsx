import React from "react";
import * as s from "./style";
import { motion } from "framer-motion";
import { OchestraList, OchestraYItem } from "@styles/animation";

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
      <motion.div variants={OchestraList} initial="hidden" animate="visible">
        <s.LogoMessage as={motion.div} variants={OchestraYItem}>
          "청년이 건강해야 부산이 산다."
        </s.LogoMessage>
      </motion.div>
    </s.LogoWrapper>
  );
};

export default MainLogo;
