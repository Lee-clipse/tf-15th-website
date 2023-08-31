import React from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

const TopNavBar = ({ title }) => {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate(-1);
  };
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
