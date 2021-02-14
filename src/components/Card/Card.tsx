import { MouseEvent } from "react";
import {
  Container,
  CardTitle,
  CardSubTitle,
  PendingLabel,
  ViewTransactionsLabel,
} from "./StyledCard";
import { AccountStatus } from "../../types";

export type CardProps = {
  id: string;
  name: string;
  type: string;
  status: string;
  balance: number;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Card = ({ id, name, type, status, balance, onClick }: CardProps) => {
  return (
    <Container value={id} onClick={onClick}>
      {status === AccountStatus.PENDING && (
        <PendingLabel>
          <i>Pending</i>
        </PendingLabel>
      )}
      <CardTitle>{name}</CardTitle>
      <CardSubTitle>{type} account</CardSubTitle>
      <span>
        {balance.toLocaleString("en-AU", {
          style: "currency",
          currency: "AUD",
        })}
      </span>
      {status === AccountStatus.ACTIVE && (
        <ViewTransactionsLabel>View Transactions {">"}</ViewTransactionsLabel>
      )}
    </Container>
  );
};

export default Card;
