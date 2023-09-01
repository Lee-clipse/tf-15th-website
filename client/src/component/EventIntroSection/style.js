import styled from "styled-components";

export const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 4rem;
  padding-bottom: 2rem;
`;

export const EventSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 4rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.MEDIUM};

  margin-bottom: 1rem;
`;

export const ImageList = styled.div``;
export const Image = styled.img`
  border-radius: 0.4rem;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 1rem;
`;
export const Description = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.SMALL};
  line-height: 140%;
`;
