import React from "react";
import * as s from "./style";
import { motion } from "framer-motion";

const ScrollInducer = () => {
  const variants = {
    hidden: {
      opacity: 0.2,
      y: 15,
    },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <s.Wrapper>
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <s.Image src="/assets/main/scroll_inducer.webp" alt="Scroll Down" />
      </motion.div>
    </s.Wrapper>
  );
};

export default ScrollInducer;
