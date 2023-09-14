import React, { useEffect } from "react";
import * as s from "./style";
import PageTemplate from "../PageTemplate";
import TopNavBar from "@common/layer/TopNavBar";
import { Link } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import { motion } from "framer-motion";
import { OchestraList } from "@styles/animation";

const EventPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTemplate>
      <TopNavBar title={"이벤트"} />
      <s.Wrapper as={motion.div} variants={OchestraList} initial="hidden" animate="visible">
        <s.Poster src="/assets/event/event_main.webp" />
        <Link to={RoutePath.EVENT_GROUP}>
          <s.Button>
            소그룹 소개
            <s.ArrowIcon src="/assets/right_arrow.svg" />
          </s.Button>
        </Link>
        <Link to={RoutePath.EVENT_STAGE}>
          <s.Button>
            스테이지 액티비티 소개
            <s.ArrowIcon src="/assets/right_arrow.svg" />
          </s.Button>
        </Link>

        <Link to={RoutePath.MISSION}>
          <s.Button>
            제로게임 소개
            <s.ArrowIcon src="/assets/right_arrow.svg" />
          </s.Button>
        </Link>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default EventPage;
