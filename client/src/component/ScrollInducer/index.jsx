import React, { useState, useEffect } from "react";
import * as s from "./style";
import { motion, AnimatePresence } from "framer-motion";

const ScrollInducer = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowScrollIcon((prevShowScrollIcon) => !prevShowScrollIcon);
    }, 500);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <s.Wrapper>
      <AnimatePresence>
        {showScrollIcon && (
          <motion.div
            initial={{ opacity: 0.5, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <s.Image src="/assets/scroll_inducer.svg" alt="Scroll Down" />
          </motion.div>
        )}
      </AnimatePresence>
    </s.Wrapper>
  );
};

export default ScrollInducer;
