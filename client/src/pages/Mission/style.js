import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.DEEP_BLUE};
`;

export const Poster = styled.img`
  width: 100%;
`;

export const Poster2nd = styled.img`
  width: 100%;
  position: relative;
  bottom: 13px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 5rem 0rem 10rem 0rem;
`;
export const ZeroGameButton = styled.img``;
