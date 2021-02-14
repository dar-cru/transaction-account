import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import InPageAlert from "../../components/InPageAlert";
import { RootState } from "../../redux/rootReducer";
import {
  fetchTransactions,
  resetTransactions,
} from "../../slices/transactionsSlice";
import TransactionsList from "./TransactionsList";

export type TransactionListProps = {
  accountNumber: string;
};

export const Connected = () => {
  const location = useLocation();
  const accountNumber = (location?.state as TransactionListProps)
    ?.accountNumber;
  const { transactions, isLoading } = useSelector(
    (state: RootState) => state.transaction
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (accountNumber) {
      dispatch(fetchTransactions(accountNumber));
    }

    return () => {
      dispatch(resetTransactions());
    };
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          {transactions?.length > 0 ? (
            <TransactionsList transactions={transactions} />
          ) : (
            <InPageAlert
              type="error"
              message="There was an error retrieving your transactions. Transactions are not available for pending accounts."
            />
          )}
        </>
      )}
    </>
  );
};

export default Connected;
