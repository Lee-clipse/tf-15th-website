import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 5rem;
  padding: 4.4rem 0rem 2rem 0rem;

  background: ${(props) => props.theme.color.BACKGROUND};
`;

export const InduceTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 4rem;
`;

export const InduceText = styled.p`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
  margin-bottom: 3rem;
`;

export const InduceArrow = styled.img`
  width: 2.4rem;
`;

export const Container = styled.div`
  width: 88%;
  border: 0.1rem solid rgba(0, 0, 0, 0.4);
  border-radius: 0.2rem;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TextSection = styled.div`
  padding: 1.4rem 1.2rem 1rem 1.2rem;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};
  text-align: left;
  margin-bottom: 1rem;
`;
export const UrlRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 76vw;
`;
export const Icon = styled.img`
  width: 2.2rem;
  margin-right: 0.4rem;
`;
export const Url = styled.p`
  color: ${(props) => props.theme.color.TEXT_LIGHT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-left: 1rem;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
