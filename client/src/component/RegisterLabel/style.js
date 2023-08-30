import styled from "styled-components";

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0rem 2rem 2rem 2rem;
`;

export const LabelTitle = styled.img`
  width: 60vw;
`;

export const LabelText = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.SMALL};

  line-height: 140%;
  margin-top: 1vh;
`;
