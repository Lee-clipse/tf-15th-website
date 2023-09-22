import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background: ${(props) => props.theme.color.TEXT_WHITE};

  width: 91vw;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
export const CloseButtonWrapper = styled.div`
  justify-content: right;
  width: 8%;
`;
export const CloseButton = styled.img`
  width: 100%;
`;

export const PosterWrapper = styled.div`
  width: 100%;
`;
export const PosterRow = styled.div`
  display: flex;
  flex-direction: row;

  > img {
    height: 25vh;
    position: relative;
    margin-bottom: 1rem;

    border-radius: 0.4rem;
  }
`;
export const Poster = styled.img`
  left: -2%;
  top: -8%;
`;
export const PosterR = styled.img`
  top: 8%;
  right: -2%;
  margin-top: 2rem;
`;
export const GoodsText = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.ML};
`;
