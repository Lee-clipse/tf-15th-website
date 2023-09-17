import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  border-radius: 1rem;
  padding: 1rem 0rem 2rem 0rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background: #ffffff;

  width: 80vw;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};

  margin: 0.4rem 0rem 1.4rem 0rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.SM};

  margin: 0rem 0rem 1.6rem 0rem;
`;

export const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  flex-direction: row;
  padding-right: 1rem;
`;
export const CloseButton = styled.img`
  width: 5vw;
`;

export const Poster = styled.img`
  width: 100%;
`;

export const Close24ButtonWrpper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  flex-direction: row;
  padding-right: 1rem;
`;
export const CheckBox = styled.input`
  margin-right: 0.6rem;
`;
export const Close24Button = styled.label`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};
  margin-right: 0.6rem;
`;
