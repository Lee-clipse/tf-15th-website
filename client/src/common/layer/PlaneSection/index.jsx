import React from "react";
import * as s from "./style";

const PlaneSection = ({ children }) => {
  return (
    <s.SectionWrapper>
      <s.SectionContainer>{children}</s.SectionContainer>
    </s.SectionWrapper>
  );
};

export default PlaneSection;
