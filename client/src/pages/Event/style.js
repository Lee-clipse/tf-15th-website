import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-top: 9vh;
`;

export const poster = styled.img`
  width: 100%;
  height: 56vh;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.color.BACKGROUND};
  border-radius: 1.4rem;
  border: 0.26rem solid ${(props) => props.theme.color.MAIN_BLUE};

  width: 80vw;
  padding: 1.2rem 1rem 1rem 2rem;
  margin-top: 2rem;

  color: ${(props) => props.theme.color.MAIN_BLUE};
  font-family: ${(props) => props.theme.font.BOLD};
  font-size: ${(props) => props.theme.font.size.M};
`;

export const ArrowIcon = styled.img`
  padding: 0rem 0.6rem 0.2rem 0rem;
`;
