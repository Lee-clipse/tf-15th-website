import React from "react";
import * as s from "./style";

const index = ({ closeModal }) => {
  // 모달 닫기 << 상위 컴포넌트 동작
  const handleModalClose = () => {
    closeModal();
  };
  return (
    <s.Wrapper>
      <s.Container>
        <s.TopRow>
          <s.CloseButtonWrapper onClick={handleModalClose}>
            <s.CloseButton src="/assets/zerogame/close.svg" alt="close" />
          </s.CloseButtonWrapper>
        </s.TopRow>
        <s.PosterWrapper>
          <s.PosterRow>
            <s.Poster src="/assets/zerogame/goods1.webp" alt="goods1" />
            <s.PosterR src="/assets/zerogame/goods4.webp" alt="goods2" />
          </s.PosterRow>
          <s.PosterRow>
            <s.Poster src="/assets/zerogame/goods3.webp" alt="goods3" />
            <s.PosterR src="/assets/zerogame/goods2.webp" alt="goods4" />
          </s.PosterRow>
          <s.GoodsText>완소 굿즈</s.GoodsText>
        </s.PosterWrapper>
      </s.Container>
    </s.Wrapper>
  );
};

export default index;
