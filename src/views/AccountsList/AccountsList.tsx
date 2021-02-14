import { MouseEvent } from "react";
import { Account } from "../../types";
import Card from "../../components/Card/Card";
import { useHistory } from "react-router-dom";
import InPageAlert from "../../components/InPageAlert";
import { Container, CardContainer } from "./StyledAccountsList";

export type AccountsProps = {
  accounts: Account[];
  isLoading?: boolean;
  errorMsg: string | null;
};

const AccountsList = ({ accounts, isLoading, errorMsg }: AccountsProps) => {
  const history = useHistory();
  const viewTransactions = (event: MouseEvent<HTMLButtonElement>) => {
    const accountNumber = event.currentTarget.value;
    history.push({
      pathname: "/transactions",
      state: { accountNumber: accountNumber },
    });
  };

  return (
    <Container>
      {isLoading && "Loading..."}
      {accounts &&
        !errorMsg &&
        !isLoading &&
        accounts.map((account) => {
          return (
            <CardContainer key={`card-for-account-${account.name}`}>
              <Card {...account} onClick={viewTransactions} />
            </CardContainer>
          );
        })}
      {accounts?.length < 1 && !isLoading && (
        <InPageAlert
          type="error"
          message="There was an error retrieving your accounts"
        />
      )}
    </Container>
  );
};

export default AccountsList;
