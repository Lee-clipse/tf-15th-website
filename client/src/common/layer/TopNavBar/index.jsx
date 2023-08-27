import React from "react";
import * as s from "./style";
import BackButton from "../../design/BackButton";
import MenuBar from "../../design/MenuBar";

const TopNavBar = ({ isRoot }) => {
  return (
    <s.Wrapper>
      <s.Content>
        <s.LeftItem>{!isRoot && <BackButton />}</s.LeftItem>
        <s.Title>청건부산</s.Title>
        <s.RightItem>
          <MenuBar />
        </s.RightItem>
      </s.Content>
    </s.Wrapper>
  );
};

export default TopNavBar;
