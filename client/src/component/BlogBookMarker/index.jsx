import React from "react";
import * as s from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useObserver from "@services/useObserver";

const BlogBookMarker = () => {
  const { ref, animation } = useObserver();

  const opacityVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const blogUrl = "https://m.blog.naver.com/PostList.naver?blogId=14th_tf";

  return (
    <s.Wrapper>
      <s.InduceTextWrapper
        as={motion.div}
        ref={ref}
        initial="hidden"
        animate={animation}
        variants={opacityVariants}
      >
        <s.InduceText>따끈따끈한 TF 소식이 궁금하다면?</s.InduceText>
        <s.InduceArrow src={"/assets/down_arrow_double.svg"} alt={"down_arrow_double"} />
      </s.InduceTextWrapper>
      <s.Container>
        <Link to={blogUrl}>
          <s.Section>
            <s.TextSection>
              <s.Label>TF 블로그 바로가기</s.Label>
              <s.UrlRow>
                <s.Icon src={"/assets/blog_icon.svg"} alt={"blog_icon"} />
                <s.Url>https://m.blog.naver.com/PostList.naver?blogId=14th_tf</s.Url>
              </s.UrlRow>
            </s.TextSection>
          </s.Section>
        </Link>
      </s.Container>
    </s.Wrapper>
  );
};

export default BlogBookMarker;
