import { FC, ReactNode } from "react";
import { StyledContainer } from "./StyledInPageAlert";

type InPageAlertProps = {
  type: "error" | "success";
  message: ReactNode;
};

const InPageAlert: FC<InPageAlertProps> = ({ type, message }) => {
  return <StyledContainer type={type}>{message}</StyledContainer>;
};

export default InPageAlert;
