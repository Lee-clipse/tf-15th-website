import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.color.SOFT_PURPLE};
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div``;

export const Title = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.XL};
  text-align: center;

  margin-top: 3rem;
`;

export const CreateButton = styled.button`
  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  background: ${(props) => props.theme.color.PURPLE};

  border-radius: 1.2rem;
  padding: 1rem;
  width: 80vw;

  margin: 5rem 0rem;
`;

export const TeamList = styled.div``;

export const TeamRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
  background: ${(props) => props.theme.color.TEXT_WHITE};

  width: 80vw;
  border-radius: 1.4rem;
  padding: 1rem 1.2rem;
  margin-top: 1rem;
`;

export const TeamName = styled.span`
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};
`;
export const MemberCount = styled.span`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
export const CountText = styled.span`
  color: ${(props) => props.theme.color.GREEN};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
