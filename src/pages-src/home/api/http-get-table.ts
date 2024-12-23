import { http } from "@/src/shared/api/instance";
import { IParamGetTable, ITableRow } from "../modal/schema-table";

interface ITableSchema {
  payload: IParamGetTable;
  response: {
    meta: {
      limit: number;
      offset: number;
      total: number;
    };
    data: ITableRow[];
  };
}

export const httpGetTable = (payload: ITableSchema["payload"]) =>
  http
    .get<ITableSchema["response"]>(`/table`, {
      params: { ...payload },
    })
    .then((response) => response.data);
