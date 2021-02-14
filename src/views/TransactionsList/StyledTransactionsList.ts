import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeading = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
`
export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }

  :hover {
    background-color: #ddd;
  }
`

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`
