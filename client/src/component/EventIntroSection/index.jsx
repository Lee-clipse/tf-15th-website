import React from "react";
import * as s from "./style";

const EventIntroSection = () => {
  return (
    <s.EventWrapper>
      {/* 소그룹 */}
      <s.EventSection>
        <s.Title>고민하는 청년 : 소그룹 활동</s.Title>
        <s.ImageList>
          <s.Image
            style={{ width: "40vw", height: "40vw" }}
            src={"/assets/intro1.png"}
            alt={"intro1"}
          />
          <s.Image
            style={{ width: "40vw", height: "40vw" }}
            src={"/assets/intro2.png"}
            alt={"intro2"}
          />
          <s.Image
            style={{ width: "80vw", height: "50vw" }}
            src={"/assets/intro3.jpg"}
            alt={"intro3"}
          />
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
        <s.Title>소통하는 청년 : 제로게임, 문화공연, 강연</s.Title>
        <s.ImageList>
          <s.Image
            style={{ width: "80vw", height: "50vw" }}
            src={"/assets/event1.png"}
            alt={"event1"}
          />
          <s.Image
            style={{ width: "80vw", height: "50vw" }}
            src={"/assets/event2.png"}
            alt={"event2"}
          />
          <s.Image
            style={{ width: "80vw", height: "50vw" }}
            src={"/assets/event3.png"}
            alt={"event3"}
          />
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
