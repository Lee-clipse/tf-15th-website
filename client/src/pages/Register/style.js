import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.color.SOFT_BLUE};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PlaneSectionWrapper = styled.div`
  margin-top: 1.4rem;
`;
