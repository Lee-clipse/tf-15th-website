import React from "react";
import * as s from "./style";

const YoutubeSection = () => {
  const videoList = [
    {
      src: "https://www.youtube.com/embed/271Cf7cPQEg?si=kh7k_O1rv-nFbcAV",
      label: "청건부산 소개",
    },
    {
      src: "https://www.youtube.com/embed/Q65BCu8f9MU?si=magM9PqqPS1qR49I",
      label: "청건부산 행사 리뷰",
    },
    {
      src: "https://www.youtube.com/embed/1Za0DneslCo?si=EBBy7FRXB1TtieRV",
      label: "행사 스토리 더빙",
    },
  ];

  return (
    <s.SectionWrapper>
      <s.SectionContainer>
        <s.SectionLogo>영상</s.SectionLogo>
        <s.SectionSlider>
          {videoList.map((video, index) => (
            <s.SectionCard>
              <s.Section>
                <iframe
                  src={`${video.src}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
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
