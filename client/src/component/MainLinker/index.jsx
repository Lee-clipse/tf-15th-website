import React from "react";
import * as s from "./style";
import { Link } from "react-router-dom";
import { RoutePath } from "@constants/enums";

const MainLinker = () => {
  const linkerList = [
    { imageName: "linker_1.png", link: RoutePath.INTRODUCE, label: "청건부산 행사 소개 보러 가기" },
    { imageName: "linker_2.jpg", link: RoutePath.EVENT, label: "0923 행사 미리 보러 가기" },
    { imageName: "linker_3.png", link: RoutePath.MISSION, label: "제로게임 미션 보러 가기" },
  ];
  return (
    <s.LinkerWrapper>
      <s.LinkerContainer>
        <s.LinkerLogo>소개</s.LinkerLogo>
        {linkerList.map((linker, index) => (
          <Link to={`${linker.link}`} key={index}>
            <s.LinkerSection>
              <s.LinkerImageWrapper>
                <s.LinkerImage
                  src={`/assets/${linker.imageName}`}
                  alt={`${linker.imageName}`}
                ></s.LinkerImage>
              </s.LinkerImageWrapper>
              <s.LinkerLabelWrapper>
                <s.LinkerLabel>{linker.label}</s.LinkerLabel>
                <s.LinkerArrow src="/assets/linker_arrow.svg" alt="linker_arrow"></s.LinkerArrow>
              </s.LinkerLabelWrapper>
            </s.LinkerSection>
          </Link>
        ))}
      </s.LinkerContainer>
    </s.LinkerWrapper>
  );
};

export default MainLinker;
