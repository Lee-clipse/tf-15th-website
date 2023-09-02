import styled from "styled-components";

export const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 4rem;
  padding: 4.4rem 0rem 2rem 0rem;

  background: ${(props) => props.theme.color.BACKGROUND_BLUE};
`;

export const EventSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 1rem;

  width: 90vw;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};

  text-align: center;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};

  margin: 1.6rem 0rem 3rem 0rem;
  text-align: center;
`;

export const ImageList = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
`;
export const ImageRowL = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;

  margin: 0rem 0.4rem 1rem 0.4rem;
`;

export const ImageRowR = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: row;

  margin: 0rem 0.4rem 1rem 0.4rem;
`;
export const ImageWrapper = styled.div`
  margin-left: 0.2rem;
`;
export const Image = styled.img`
  border-radius: 0.4rem;
`;

export const DescriptionWrapper = styled.div`
  margin: 1.4rem 0rem 3rem 0rem;
`;
export const Description = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};
  line-height: 140%;
`;
