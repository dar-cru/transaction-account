import React from "react";
import { render, RenderResult } from "@testing-library/react";
import AccountsList from "./AccountsList";
import { Account, AccountStatus } from "../../types";

const accounts: Account[] = [
  {
    name: "Progress Saver",
    type: "savings",
    id: "1",
    status: AccountStatus.ACTIVE,
    balance: 280500.22,
  },
  {
    name: "Every day account",
    type: "debit",
    id: "2",
    status: AccountStatus.PENDING,
    balance: 0,
  },
  {
    name: "Home Loan",
    type: "mortgage",
    id: "3",
    status: AccountStatus.PENDING,
    balance: -600000.22,
  },
  {
    name: "Qantas Black",
    type: "credit",
    id: "4",
    status: AccountStatus.PENDING,
    balance: -340.22,
  },
];

describe("<AccountsList />", () => {
  test("renders the login form if there is no authentication", () => {
    const tree: RenderResult = render(<AccountsList accounts={accounts} isLoading={false} errorMsg={null} />);

    const { container } = tree;
    expect(container).toMatchSnapshot();
  });
});
