import { FC, ButtonHTMLAttributes } from "react";
import { StyledButton } from "./StyledButton";

export type ButtonProps = {
  label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <StyledButton {...props}>
      {label}
    </StyledButton>
  );
};

export default Button;
