import React from "react";
import { render, RenderResult } from "@testing-library/react";
import TransactionsList from "./TransactionsList";
import { Transaction, TransactionType } from "../../types";

const transactions: Transaction[] = [
  {
    name: "Uber Eats",
    amount: 50.22,
    type: TransactionType.DEBIT,
    dateTime: "2021-01-02",
  },
  {
    name: "Some shopping mall",
    amount: 150.22,
    type: TransactionType.DEBIT,
    dateTime: "2021-01-04",
  },
  {
    name: "Colworths Supermaket",
    amount: 350.22,
    type: TransactionType.DEBIT,
    dateTime: "2021-01-04",
  },
  {
    name: "Lotto win",
    amount: 2.5,
    type: TransactionType.CREDIT,
    dateTime: "2021-01-04",
  },
];

describe("<TransactionsList />", () => {
  test("renders the login form if there is no authentication", () => {
    const tree: RenderResult = render(<TransactionsList transactions={transactions} />);
    
    const { container } = tree;
    expect(container).toMatchSnapshot();
  });
});
