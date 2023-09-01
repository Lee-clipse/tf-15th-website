import styled from "styled-components";

export const IntroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 4.2rem;
  padding-bottom: 3rem;

  border-bottom: 0.24rem solid ${(props) => props.theme.color.TEXT_BLACK};
`;

export const StampWrpper = styled.div``;
export const Stamp = styled.img``;

export const TextWrapper = styled.div`
  margin-top: 1rem;
`;
export const Text = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.SMALL};
  line-height: 140%;
`;
