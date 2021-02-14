import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 15px 48px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  background-color: white;
  border: 2px solid #4CAF50;
  color: #4CAF50;
  box-shadow: none;

  :hover:not([disabled]) {
    background-color: #4CAF50;
    color: white;
    border: 2px solid #4CAF50;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;