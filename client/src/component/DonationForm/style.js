import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};

  margin-bottom: 1.4vh;
`;

export const DonationWrapper = styled.div`
  margin-bottom: 2.4vh;
`;

export const DonationContents = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.LIGHT};
  font-size: ${(props) => props.theme.font.size.S};

  margin-bottom: 1vh;
  letter-spacing: 120%;
  line-height: 150%;
`;

export const DonationAlert = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};

  margin-bottom: 1vh;
  letter-spacing: 120%;
  line-height: 150%;
`;

export const SectionWrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 1.4rem;
`;

export const Input = styled.input`
  width: 90%;
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};
  background: ${(props) => props.theme.color.TEXT_WHITE};
`;

export const MoneyFormText = styled.span`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};
`;

export const BlueHighlightText = styled.span`
  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};
`;

export const BoldText = styled.span`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};

  margin-bottom: 1vh;
  letter-spacing: 120%;
  line-height: 150%;
`;
