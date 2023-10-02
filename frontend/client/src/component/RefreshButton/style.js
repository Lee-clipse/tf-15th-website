import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.color.GREEN};
  border-radius: 1.2rem;
  padding: 1rem;
  border: 0.32rem solid rgba(0, 0, 0, 1);

  height: 100%;
`;

export const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
