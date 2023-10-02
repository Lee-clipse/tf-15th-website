import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  overflow-y: scroll;
  height: 100%;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  flex-grow: 1;
  margin: 2rem;
`;

export const InfoSection = styled.ul``;

export const UserViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background: ${(props) => props.theme.color.SOFT_PURPLE};
  padding-bottom: 10rem;
`;

export const InfoText = styled.li`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.XL};

  margin-bottom: 1rem;
`;

export const SimpleTeamInfoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 5rem;

  > p {
    color: ${(props) => props.theme.color.TEXT_BLACK};
    font-family: ${(props) => props.theme.font.NORMAL};
    font-size: ${(props) => props.theme.font.size.L};

    margin-bottom: 3rem;
  }
`;

export const TeamName = styled.p``;

export const TeamScore = styled.p``;

export const TeamExitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TeamExitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.RED};
  border-radius: 1.4rem;

  width: 90vw;
  padding: 1rem;
  margin-top: 2rem;

  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;

export const ClearedSection = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background: ${(props) => props.theme.color.YELLOW};
`;
export const ClearedText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;
export const ReceivedText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${(props) => props.theme.color.ORANGE};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.L};
`;

export const GiveGoodsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const GiveGoodsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.color.ORANGE};
  border-radius: 1.4rem;

  width: 90vw;
  padding: 1rem;
  margin-top: 2rem;

  color: ${(props) => props.theme.color.TEXT_WHITE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.L};
`;

export const NotAgreeText = styled.span`
  color: ${(props) => props.theme.color.RED};
  font-family: ${(props) => props.theme.font.BOLD};
`;
export const DonationText = styled.span`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
`;
