import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 17rem;
`;

export const LogoImage = styled.img`
  align-items: flex-end;

  width: 66vw;
`;

export const LogoMessage = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};

  margin-top: 2vh;
`;
