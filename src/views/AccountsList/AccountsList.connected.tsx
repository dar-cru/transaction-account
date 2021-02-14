import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { fetchAccounts } from "../../slices/accountsSlice";
import AccountsList from "./AccountsList";

export const Connected = () => {
  const { accounts, isLoading, error } = useSelector(
    (state: RootState) => state.account
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  return <AccountsList accounts={accounts} isLoading={isLoading} errorMsg={error} />;
};

export default Connected;
