import styled from "styled-components";

export const StyledContainer = styled.div<{ type: "error" | "success" }>`
  display: flex;
  background-color: transparent;
  padding: 10px 20px;
  text-align: center;
  max-width: 80%;
  margin: 20px auto;
  color: ${(props) => (props.type === "error" ? "red" : "green")};
  border-radius: 8px;
  border: 1px solid ${(props) => (props.type === "error" ? "red" : "green")};
  font-size: 14px;
`;
