import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};

  margin-bottom: 2.4vh;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 2.4vh;

  color: ${(props) => props.theme.color.TEXT_BLACK};
  font-family: ${(props) => props.theme.font.NORMAL};
  font-size: ${(props) => props.theme.font.size.S};
`;

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
