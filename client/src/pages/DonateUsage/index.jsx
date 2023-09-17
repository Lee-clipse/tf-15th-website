import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import * as s from "./style";
import { motion } from "framer-motion";
import { OchestraList } from "@styles/animation";

const DonateUsagePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <s.Wrapper>
        <TopNavBar title={"기부금 사용처"} />
        <motion.div variants={OchestraList} initial="hidden" animate="visible">
          <s.Poster src="/assets/donate_usage/poster1.webp" alt="donate_usage1" />
          <s.Poster src="/assets/donate_usage/poster2.webp" alt="donate_usage2" />
          <s.Poster src="/assets/donate_usage/poster3.webp" alt="donate_usage3" />
          <s.Poster src="/assets/donate_usage/poster4.webp" alt="donate_usage4" />
          <s.Poster src="/assets/donate_usage/poster5.webp" alt="donate_usage5" />
        </motion.div>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default DonateUsagePage;
