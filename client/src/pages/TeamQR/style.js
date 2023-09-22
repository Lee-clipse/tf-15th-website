import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: ${(props) => props.theme.color.MAIN_BLUE};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const TeamName = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};
`;

export const TeamScore = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};

  margin-top: 2rem;
`;

export const TeamQRWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 3rem;
`;
export const QRLabel = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};
`;
export const TeamQR = styled.img`
  width: 60vw;
  margin-top: 3rem;

  margin-bottom: 5rem;
`;

export const Poster = styled.img`
  width: 100vw;
  height: 100%;

  margin-bottom: 3rem;
`;

export const InduceText = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.ML};
  width: 86%;
  line-height: 135%;
  margin-bottom: 2rem;
  text-align: center;
`;

export const GoodsModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: ${(props) => props.theme.color.TEXT_WHITE};

  border-radius: 1.2rem;
  padding: 1.2rem;
  width: 80vw;
  margin-bottom: 2rem;
`;
export const GoodsModalText = styled.p`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
`;
export const GalleryIcon = styled.img`
  margin-left: 1rem;
  width: 2.2rem;
`;

export const MainButton = styled.button`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
  background: ${(props) => props.theme.color.TEXT_WHITE};

  border-radius: 1.2rem;
  padding: 1.2rem;
  width: 80vw;
`;
