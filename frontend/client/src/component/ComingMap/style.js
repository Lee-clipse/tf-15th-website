import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;

  margin-bottom: 12rem;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};
  margin-bottom: 1.4rem;
`;
export const LittleLabel = styled.p`
  margin-top: 0.4rem;
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.ML};
`;

export const ComingMap = styled.img`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.4rem;
`;

export const TextWrapper = styled.div`
  width: 90%;

  > p {
    color: ${(props) => props.theme.color.TEXT_BLACK};

    line-height: 150%;
  }
`;

export const HighLight = styled.span`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
`;

export const TitleText = styled.p`
  margin-top: 3rem;
  margin-bottom: 1.4rem;
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.M};
`;

export const SmallText = styled.p`
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.SM};
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.SM};
  margin-bottom: 1.4rem;
`;
export const MiniText = styled.p`
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.SM};
`;
