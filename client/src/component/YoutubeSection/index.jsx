import React from "react";
import * as s from "./style";

const YoutubeSection = () => {
  const videoList = [
    {
      img: "/assets/thumbnail1.png",
      src: "https://www.youtube.com/embed/271Cf7cPQEg?si=kh7k_O1rv-nFbcAV",
      label: "청건부산 소개",
    },
    {
      img: "/assets/thumbnail2.png",
      src: "https://www.youtube.com/watch?v=74FeFuHP3EU&ab_channel=%EC%B2%AD%EA%B1%B4%EB%B6%80%EC%82%B0",
      label: "연예인들의 응원 메시지",
    },
    {
      img: "/assets/thumbnail3.png",
      src: "https://www.youtube.com/watch?v=HUtlB3kCTIc&ab_channel=%EC%B2%AD%EA%B1%B4%EB%B6%80%EC%82%B0",
      label: "UCC: 환경오염 재판",
    },
  ];

  return (
    <s.SectionWrapper>
      <s.SectionContainer>
        <s.SectionLogo>영상</s.SectionLogo>
        <s.SectionSlider>
          {videoList.map((video, index) => (
            <s.SectionCard key={index}>
              <s.Section href={video.src}>
                <s.Thumbnail src={video.img} />
              </s.Section>
              <s.SectionLabel>{video.label}</s.SectionLabel>
            </s.SectionCard>
          ))}
        </s.SectionSlider>
      </s.SectionContainer>
    </s.SectionWrapper>
  );
};

export default YoutubeSection;
