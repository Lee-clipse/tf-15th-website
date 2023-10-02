import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import * as s from "./style";
import { motion } from "framer-motion";
import { OchestraList } from "@styles/animation";

const EventStagePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <TopNavBar title={"무대"} />
      <s.Wrapper as={motion.div} variants={OchestraList} initial="hidden" animate="visible">
        <s.Poster src="/assets/event/stage_poster1.webp" alt="stage_poster1" />
        <s.Poster src="/assets/event/stage_poster2.webp" alt="stage_poster2" />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default EventStagePage;
