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
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background: ${(props) => props.theme.color.TEXT_WHITE};

  width: 80vw;
  height: 60vh;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
export const CloseButtonWrapper = styled.div`
  justify-content: right;
  width: 8%;
`;
export const CloseButton = styled.img`
  width: 100%;
`;

export const DiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  display: inline-block;

  width: 100%;
  height: 80%;
`;

export const RollButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.BACKGROUND};
  border-radius: 1.4rem;
  border: 0.26rem solid ${(props) => props.theme.color.MAIN_BLUE};

  width: 80%;
  padding: 1rem;
  margin-bottom: 1rem;

  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};
`;
