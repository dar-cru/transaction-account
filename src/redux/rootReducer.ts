import { combineReducers } from '@reduxjs/toolkit'
import accountReducer from "../slices/accountsSlice";
import transactionReducer from "../slices/transactionsSlice";
import authenticatedReducer from "../slices/authenticationSlice";

const rootReducer = combineReducers({
  authenticated: authenticatedReducer,
  account: accountReducer,
  transaction: transactionReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer