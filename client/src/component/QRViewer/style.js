import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  overflow-y: scroll;
  height: 100vh;
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

export const NotAgreeText = styled.span`
  color: ${(props) => props.theme.color.RED};
  font-family: ${(props) => props.theme.font.BOLD};
`;
export const DonationText = styled.span`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
`;
