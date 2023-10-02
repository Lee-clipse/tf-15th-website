import React from "react";
import * as s from "./style";

const RefreshButton = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <s.Wrapper onClick={refreshPage}>
      <s.Container>
        <s.Button>
          <s.Icon src="/assets/zerogame/refresh_icon.svg" alt="refresh_icon" />
        </s.Button>
      </s.Container>
    </s.Wrapper>
  );
};

export default RefreshButton;
