import styled from "styled-components";

export const IntroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 88vw;
  margin: 0 auto;
`;

export const IntroTitle = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};

  margin: 9rem 0rem 1rem 0rem;
`;

export const StampWrapper = styled.div``;
export const Stamp = styled.img`
  margin: 2.6rem 0rem 1.2rem 0rem;
  width: 100vw;
`;

export const TextWrapper = styled.div`
  margin-top: 1rem;
`;
export const Text = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};
  line-height: 140%;
`;

export const BlueHighlightText = styled.span`
  color: ${(props) => props.theme.color.PINK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};
  margin: 0rem 0.2rem 0rem 0.2rem;
`;
