import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../redux/store";
import { getTransactions } from "../services/transactions.api";
import { Transaction, TransactionResponse } from "../types";

type TransactionState = {
  isLoading: boolean;
  error: string | null;
  transactions: Transaction[];
};

const initialState: TransactionState = {
  isLoading: false,
  error: null,
  transactions: [],
};

const transactions = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    getTransactionsRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    getTransactionsSuccess(state, { payload }: PayloadAction<Transaction[]>) {
      state.isLoading = false;
      state.transactions = payload;
      state.error = null;
    },
    getTransactionsFailed(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.isLoading = false;
    },
    resetTransactions(state) {
      state.transactions = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsFailed,
  resetTransactions,
} = transactions.actions;

export default transactions.reducer;

export const fetchTransactions = (accountNumber: string): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    dispatch(getTransactionsRequest());
    const jwtToken = getState().authenticated.jwtToken as string;
    const transactionResponse = await getTransactions(jwtToken, accountNumber);
    dispatch(
      getTransactionsSuccess(
        (transactionResponse as TransactionResponse)
          .transactions as Transaction[]
      )
    );
  } catch (err) {
    dispatch(getTransactionsFailed(err.toString()));
  }
};
