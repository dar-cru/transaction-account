import buildClient from "./client";
import { Account } from "../types";
import config from "../config";

const errorMessage = "There was an error retrieving your accounts";

export const getAccounts = async (
  bearerToken: string
): Promise<Account[] | Error> => {
  const client = buildClient({
    baseURL: config.apiUrl,
    jwtToken: bearerToken,
  });

  try {
    const response = await client.get(`/accounts`);
    return response.data;
  } catch (error) {
    throw new Error(errorMessage);
  }
};

export const postAccount = async (
  bearerToken: string,
  account: Account
): Promise<Account | Error> => {
  const client = buildClient({
    baseURL: config.apiUrl,
    jwtToken: bearerToken,
  });

  try {
    const response = await client.post(`/accounts`, account);
    return response.data;
  } catch (error) {
    throw new Error(errorMessage);
  }
};
