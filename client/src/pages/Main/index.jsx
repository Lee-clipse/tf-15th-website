import React from "react";
import PageTemplate from "../PageTemplate";
import MainLogo from "../../component/MainLogo/index";
import MainLinker from "../../component/MainLinker/index";

const Main = () => {
  return (
    <PageTemplate>
      <MainLogo></MainLogo>
      <MainLinker></MainLinker>
    </PageTemplate>
  );
};

export default Main;
