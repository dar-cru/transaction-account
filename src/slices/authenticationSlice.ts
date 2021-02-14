import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../redux/store";
import { postAuthentication } from "../services/authentication.api";

export type AuthenticationResponse = {
  jwtToken: string;
};

type AuthenticationState = {
  isLoading: boolean;
  error: string | null;
  jwtToken: string | null;
};

const initialState: AuthenticationState = {
  isLoading: false,
  error: null,
  jwtToken: null,
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    postAuthenticationRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    postAuthenticationSuccess(state, { payload }: PayloadAction<AuthenticationResponse>) {
      state.isLoading = false;
      state.error = null;
      state.jwtToken = payload.jwtToken;
    },
    postAuthenticationFailed(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.isLoading = false;
    },
    logout(state) {
      state.jwtToken = null;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const {
  postAuthenticationRequest,
  postAuthenticationSuccess,
  postAuthenticationFailed,
  logout,
} = authentication.actions;

export default authentication.reducer;

export const login = (username: string, password: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(postAuthenticationRequest());
    const transactionResponse = await postAuthentication(username, password);
    dispatch(postAuthenticationSuccess(transactionResponse as AuthenticationResponse));
  } catch (err) {
    dispatch(postAuthenticationFailed(err.message as string));
  }
};
