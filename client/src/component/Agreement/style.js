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

export const AgreementWrapper = styled.div`
  margin-bottom: 2.4vh;
`;

export const AgreementContents = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.LIGHT};
  font-size: ${(props) => props.theme.font.size.S};

  margin-bottom: 1vh;
  letter-spacing: 120%;
  line-height: 150%;
`;

export const SectionWrapper = styled.div``;

export const LabelWrapper = styled.div``;

export const RadioLabel = styled.label`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.S};
  margin-right: 1rem;
`;

export const RadioText = styled.input`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.LIGHT};
  font-size: ${(props) => props.theme.font.size.S};

  margin-right: 0.4rem;
`;
