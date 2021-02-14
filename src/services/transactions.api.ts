import buildClient from "./client";
import { TransactionResponse } from "../types";
import config from "../config";

export const getTransactions = async (
  bearerToken: string,
  accountNumber: string,
): Promise<TransactionResponse | Error> => {
  const client = buildClient({
    baseURL: config.apiUrl,
    jwtToken: bearerToken,
  });

  try {
    const response = await client.get(`/transactions/${accountNumber}`);
    return response.data;
  } catch (error) {
    throw new Error("There was an error retrieving your transactions");
  }
};
