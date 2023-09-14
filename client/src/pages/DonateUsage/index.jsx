import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import * as s from "./style";
import { motion } from "framer-motion";

const DonateUsagePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <s.Wrapper>
        <TopNavBar title={"기부금 사용처"} />
        <div as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <s.Poster src="/assets/donate_usage_1.svg" alt="donate_usage1" />
          <s.Poster src="/assets/donate_usage_2.svg" alt="donate_usage2" />
          <s.Poster src="/assets/donate_usage_3.svg" alt="donate_usage3" />
          <s.Poster src="/assets/donate_usage_4.svg" alt="donate_usage4" />
        </div>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default DonateUsagePage;
