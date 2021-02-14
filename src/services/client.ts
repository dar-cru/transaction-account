import Axios, { AxiosInstance } from "axios";

export type ClientConfig = {
  baseURL?: string;
  jwtToken?: string;
  additionalHeaders?: {
    name: string;
    value: string;
  }[];
};

const buildClient = (config?: ClientConfig): AxiosInstance => {
  const baseURL = config?.baseURL || '';

  const client: AxiosInstance = Axios.create({
    baseURL,
    responseType: 'json'
  });

  if (!!config?.jwtToken) {
    client.defaults.headers.Authorization = `Bearer ${config.jwtToken}`;
  } else {
    client.defaults.headers.Authorization = undefined;
  }

  if (config?.additionalHeaders) {
    config?.additionalHeaders.map((header) => (client.defaults.headers[header.name] = header.value));
  }
  return client;
};

export default buildClient;