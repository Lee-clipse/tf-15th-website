import React, { useEffect } from "react";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import * as s from "./style";
import { motion } from "framer-motion";
import { OchestraList } from "@styles/animation";

const EventGroupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <s.Wrapper as={motion.div} variants={OchestraList} initial="hidden" animate="visible">
        <TopNavBar title={"소그룹"} />
        <s.Poster src="/assets/event/group_poster.webp" alt="group_poster" />
      </s.Wrapper>{" "}
    </PageTemplate>
  );
};

export default EventGroupPage;
