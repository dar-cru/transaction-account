import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 800px;
  flex-flow: wrap;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;
