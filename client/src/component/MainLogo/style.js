import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const LogoImage = styled.img`
  width: 100vw;
  height: auto;
`;

export const LogoMessage = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.MAIN_MEDIUM};
  font-size: ${(props) => props.theme.font.size.MEDIUM};
`;
