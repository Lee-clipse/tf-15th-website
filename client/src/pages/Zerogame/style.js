import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;

  padding: 4rem 0rem;

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
  font-size: ${(props) => props.theme.font.size.ML};
`;

export const TeamScoreLabel = styled.p``;
export const TeamScore = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};

  margin-top: 2rem;
  text-align: center;
`;

export const TeamIndexLabel = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};

  margin-top: 3rem;
  text-align: center;
  margin-bottom: 0.8rem;
`;
export const TeamIndex = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};

  margin-bottom: 3rem;
  text-align: center;
`;

export const BoardWapper = styled.div`
  width: 80vw;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
`;
export const Board = styled.img`
  width: 100%;
  height: 100%;
`;
export const IndexMarker = styled.img`
  width: 100%;
  position: absolute;
  z-index: 2;
  left: 0%;
`;
export const FlagWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 3;
  left: 0%;
  top: 0%;
`;
export const Flag = styled.img`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90vw;
`;

export const DiceButton = styled.button`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
  background: ${(props) => props.theme.color.ORANGE};

  border-radius: 1.2rem;
  padding: 1rem;
  width: 80%;
  height: 100%;
  border: 0.36rem solid rgba(0, 0, 0, 1);
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

export const ArrowIcon = styled.img`
  width: 3rem;
  margin: 1rem 0rem 2rem 0rem;
`;
export const TeamQR = styled.img`
  width: 60vw;
`;
