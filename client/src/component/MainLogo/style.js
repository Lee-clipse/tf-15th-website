import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 7rem;
`;

export const LogoImage = styled.img`
  align-items: flex-end;

  width: 76vw;
`;

export const LogoMessage = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.GS_MEDIUM};
  font-size: ${(props) => props.theme.font.size.LARGE};

  margin-top: 4vh;
`;
