import { http } from "@/src/shared/api/instance";

export interface Schema {
  payload: {
    login: string;
    password: string;
  };
  response: {
    access_token: string;
  };
}

export const httpPostRegistration = (payload: Schema["payload"]) =>
  http
    .post<Schema["response"]>("/registration", payload)
    .then((response) => response.data);
