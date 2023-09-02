import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};

  margin-bottom: 2.4vh;
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

export const SectionWrapper = styled.div``;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  border-radius: 0.3rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
