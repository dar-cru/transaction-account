import { Transaction } from "../../types";
import {
  Table,
  TableHeading,
  TableRow,
  TableData,
} from "./StyledTransactionsList";

export type TransactionsProps = {
  transactions: Transaction[];
};

const TransactionsList = ({ transactions }: TransactionsProps) => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Table>
        <tbody>
          <tr>
            <TableHeading>Transaction Name</TableHeading>
            <TableHeading>Amount</TableHeading>
            <TableHeading>Transaction Type</TableHeading>
            <TableHeading>Date</TableHeading>
          </tr>
          {transactions.map((transaction, i) => {
            return (
              <TableRow key={`transaction-${transaction.name}-${i}`}>
                <TableData>{transaction.name}</TableData>
                <TableData>
                  {transaction.amount.toLocaleString("en-AU", {
                    style: "currency",
                    currency: "AUD",
                  })}
                </TableData>
                <TableData>{transaction.type}</TableData>
                <TableData>{transaction.dateTime}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionsList;
