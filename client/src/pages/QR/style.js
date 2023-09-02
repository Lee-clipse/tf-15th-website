import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AnnouncmentWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Announcment = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};

  margin-right: 1rem;
`;
export const LightAnnouncment = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.M};
`;

export const Logo = styled.img`
  width: 46%;
`;

export const CaptureInduceWrapper = styled.div`
  flex-grow: 1;

  margin-top: 4rem;
`;
export const CaptureInduceText = styled.p`
  color: ${(props) => props.theme.color.PINK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXXL};
`;

export const QRImageWrapper = styled.div`
  flex-grow: 1;
`;
export const QRImage = styled.img`
  width: 80vw;
`;

export const MainButtonWrapper = styled.div`
  flex-grow: 1;
`;
export const MainButton = styled.button`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  border: 0.26rem solid ${(props) => props.theme.color.MAIN_BLUE};
  width: 80vw;
`;
export const ButtonText = styled.p`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.ML};

  padding: 1.4rem;
`;
