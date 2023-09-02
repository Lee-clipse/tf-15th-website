import React from "react";
import * as s from "./style";
import { motion } from "framer-motion";
import { OchestraList, OchestraYItem } from "@styles/animation";

const EventIntroSection = () => {
  return (
    <s.EventWrapper as={motion.div} variants={OchestraList} initial="hidden" animate="visible">
      {/* 소그룹 */}
      <s.EventSection as={motion.div} variants={OchestraYItem}>
        <s.Title>
          고민하는 청년 <s.SubTitle>소그룹 활동</s.SubTitle>
        </s.Title>
        <s.ImageList>
          <s.ImageRowL>
            <s.ImageWrapper>
              <s.Image
                style={{ width: "40vw", height: "40vw" }}
                src={"/assets/intro1.png"}
                alt={"intro1"}
              />
            </s.ImageWrapper>
            <s.ImageWrapper>
              <s.Image
                style={{ width: "40vw", height: "40vw" }}
                src={"/assets/intro2.png"}
                alt={"intro2"}
              />
            </s.ImageWrapper>
          </s.ImageRowL>
          <s.ImageRowR>
            <s.ImageWrapper>
              <s.Image
                style={{ width: "30vw", height: "30vw" }}
                src={"/assets/intro3.png"}
                alt={"intro3"}
              />
            </s.ImageWrapper>
            <s.ImageWrapper>
              <s.Image
                style={{ width: "30vw", height: "30vw" }}
                src={"/assets/intro4.png"}
                alt={"intro4"}
              />
            </s.ImageWrapper>
            <s.ImageWrapper>
              <s.Image
                style={{ width: "30vw", height: "30vw" }}
                src={"/assets/intro5.png"}
                alt={"intro5"}
              />
            </s.ImageWrapper>
          </s.ImageRowR>
          <s.ImageRowL>
            <s.ImageWrapper>
              <s.Image
                style={{ width: "70vw", height: "40vw" }}
                src={"/assets/intro6.jpg"}
                alt={"intro6"}
              />
            </s.ImageWrapper>
          </s.ImageRowL>
        </s.ImageList>
        <s.DescriptionWrapper>
          <s.Description>
            청년들을 모아 북클럽, 새활용 만들기, 정책토론 등의 소그룹을 운영함으로써 공동체와 함께
            고민을 해소하고, 청년으로서 정체성을 만들어 나가는 경험을 하는 것에 목적이 있다.
          </s.Description>
        </s.DescriptionWrapper>
      </s.EventSection>

      {/* 제로게임, 공연 */}
      <s.EventSection>
        <s.Title>
          소통하는 청년 <s.SubTitle>제로게임, 문화공연, 강연</s.SubTitle>
        </s.Title>
        <s.ImageList>
          <s.ImageRowL>
            <s.Image
              style={{ width: "70vw", height: "40vw" }}
              src={"/assets/event1.png"}
              alt={"event1"}
            />
          </s.ImageRowL>
          <s.ImageRowR>
            <s.Image
              style={{ width: "70vw", height: "40vw" }}
              src={"/assets/event2.png"}
              alt={"event2"}
            />
          </s.ImageRowR>
          <s.ImageRowL>
            <s.Image
              style={{ width: "70vw", height: "40vw" }}
              src={"/assets/event3.png"}
              alt={"event3"}
            />
          </s.ImageRowL>
        </s.ImageList>
        <s.DescriptionWrapper>
          <s.Description>
            부산에 거주하는 청년예술가들에게 재능을 펼칠 수 있는 문화의 장을 제공하고, 우리 세대가
            맞닥뜨릴 문제인 기후위기에 대한 메세지와 경감식을 청년들에게 던지고자 한다.
          </s.Description>
        </s.DescriptionWrapper>
      </s.EventSection>
    </s.EventWrapper>
  );
};

export default EventIntroSection;
