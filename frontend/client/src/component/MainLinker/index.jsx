/* eslint-disable no-mixed-operators */
import React from "react";
import * as s from "./style";
import { Link } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import useObserver from "@services/useObserver";
import { motion } from "framer-motion";

const MainLinker = () => {
  const { ref, animation } = useObserver();

  const opacityVariants = {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const linkerList = [
    {
      imageName: "linker_1.webp",
      link: RoutePath.INTRODUCE,
      label: "청건부산 행사 소개 보러 가기",
    },
    { imageName: "linker_2.webp", link: RoutePath.EVENT, label: "0923 행사 미리 보러 가기" },
    { imageName: "linker_3.webp", link: RoutePath.MISSION, label: "제로게임 미션 보러 가기" },
    { imageName: "linker_4.webp", link: RoutePath.DONATE_USAGE, label: "기부금 사용처 보러 가기" },
  ];

  return (
    <s.LinkerWrapper>
      <s.LinkerContainer>
        <s.LinkerLogo
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={animation}
          variants={opacityVariants}
        >
          소개
        </s.LinkerLogo>
        {linkerList.map((linker, index) => (
          <Link to={`${linker.link}`} key={index}>
            <s.LinkerSection
              as={motion.div}
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={opacityVariants}
            >
              <s.LinkerImageWrapper>
                <s.LinkerImage
                  src={`/assets/main/${linker.imageName}`}
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
