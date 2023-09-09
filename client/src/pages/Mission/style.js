import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  background: ${(props) => props.theme.color.DEEP_BLUE};
`;

export const poster = styled.img`
  width: 100%;
`;

export const BoardPoster = styled.img`
  width: 100%;

  position: relative;
  bottom: 12rem;
`;
