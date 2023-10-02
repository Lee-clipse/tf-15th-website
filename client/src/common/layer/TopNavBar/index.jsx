import React from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

const TopNavBar = ({ title, fixed }) => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate(-1);
  };
  if (fixed === false) {
    return (
      <s.NoFixedNavBarWrapper>
        <s.BackButtonWrapper onClick={onClickBackButton}>
          <s.BackButton src="/assets/back_arrow.svg" />
        </s.BackButtonWrapper>
        <s.CenterTextWrapper>
          <s.CenterText>{title}</s.CenterText>
        </s.CenterTextWrapper>
      </s.NoFixedNavBarWrapper>
    );
  }

  return (
    <s.NavBarWrapper>
      <s.BackButtonWrapper onClick={onClickBackButton}>
        <s.BackButton src="/assets/back_arrow.svg" />
      </s.BackButtonWrapper>
      <s.CenterTextWrapper>
        <s.CenterText>{title}</s.CenterText>
      </s.CenterTextWrapper>
    </s.NavBarWrapper>
  );
};

export default TopNavBar;
