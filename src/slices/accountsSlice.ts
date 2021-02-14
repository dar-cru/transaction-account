import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../redux/store";
import { getAccounts, postAccount } from "../services/accounts.api";
import { Account } from "../types";

type AccountState = {
  isLoading: boolean;
  error: string | null;
  accounts: Account[];
};

const initialState: AccountState = {
  isLoading: false,
  error: null,
  accounts: [],
};

const accounts = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    getAccountsRequest(state: AccountState) {
      state.isLoading = true;
      state.error = null;
    },
    getAccountsSuccess(
      state: AccountState,
      { payload }: PayloadAction<Account[]>
    ) {
      state.accounts = payload;
      state.error = null;
      state.isLoading = false;
    },
    getAccountsFailed(state: AccountState, { payload }: PayloadAction<string>) {
      state.accounts = [];
      state.error = payload;
      state.isLoading = false;
    },
    addAccountRequest(state: AccountState) {
      state.isLoading = true;
      state.error = null;
    },
    addAccountSuccess(
      state: AccountState,
      { payload }: PayloadAction<Account>
    ) {
      state.accounts = state.accounts.concat(payload);
      state.isLoading = false;
      state.error = null;
    },
    addAccountFailed(state: AccountState, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  getAccountsRequest,
  getAccountsSuccess,
  getAccountsFailed,
  addAccountRequest,
  addAccountSuccess,
  addAccountFailed,
} = accounts.actions;

export default accounts.reducer;

export const fetchAccounts = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(getAccountsRequest());
    const jwtToken = getState().authenticated.jwtToken as string;
    const accounts = await getAccounts(jwtToken);
    dispatch(getAccountsSuccess(accounts as Account[]));
  } catch (err) {
    dispatch(getAccountsFailed(err.toString()));
  }
};

export const addNewAccount = (account: Account): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(addAccountRequest());
    const jwtToken = getState().authenticated.jwtToken as string;
    const newAccount = await postAccount(jwtToken, account);
    dispatch(addAccountSuccess(newAccount as Account));
  } catch (err) {
    dispatch(addAccountFailed(err.toString()));
  }
};
