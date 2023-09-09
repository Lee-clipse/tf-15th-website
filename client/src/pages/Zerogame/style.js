import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: ${(props) => props.theme.color.MAIN_BLUE};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 2rem 0rem 4rem 0rem;
`;

export const TeamScore = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};
`;

export const TeamName = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};
`;

export const TeamIndex = styled.p`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XXL};
`;

export const Board = styled.img`
  width: 90vw;
`;

export const DiceButton = styled.button`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
  background: ${(props) => props.theme.color.ORANGE};

  border-radius: 1.2rem;
  padding: 1rem;
  width: 80vw;
  border: 0.36rem solid rgba(0, 0, 0, 1);
`;
