import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  min-width: 320px;
  min-height: 104px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const PendingLabel = styled.span`
  align-self: flex-end;
  color: crimson;
  margin-bottom: -10px;
`;

export const CardTitle = styled.h3`
  align-self: flex-start;
  margin: 10px 0;
`;

export const CardSubTitle = styled.h4`
  align-self: flex-start;
  margin: 0 0 6px;
`;

export const ViewTransactionsLabel = styled.span`
  align-self: flex-end;
  color: dodgerblue;
`;
