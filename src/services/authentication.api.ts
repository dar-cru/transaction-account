import config from "../config";
import { AuthenticationResponse } from "../slices/authenticationSlice";
import buildClient from "./client";

export const postAuthentication = async (
  username: string,
  password: string
): Promise<AuthenticationResponse | Error> => {
  const client = buildClient({
    baseURL: config.apiUrl,
  });

  try {
    const body = {
      username: username,
      password: password,
    };
    const response = await client.post(`/authenticate`, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Oops, we encountered an error. Please try again later.');
  }
};
