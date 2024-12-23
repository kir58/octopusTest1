// Это симуляция запроса на бек, тут ничего не меняй!!!

import { NextRequest, NextResponse } from "next/server";
import { dataTable } from "../_const/data-table";
import { usersList } from "../_const/users";

type Params = {
  limit?: number;
  offset?: number;
  search?: string;
};

export async function GET(request: NextRequest, context: any) {
  const searchParams = request.nextUrl.searchParams;
  const authorization = request.headers.get(`authorization`);
  if (!authorization)
    return NextResponse.json(
      { error: "Нужна авторизация!!!" },
      { status: 401 }
    );
  const uuid = authorization.split(` `)?.[1];
  if (!uuid)
    return NextResponse.json(
      { error: "Нужна авторизация!!!" },
      { status: 401 }
    );
  const user = usersList.find((el) => el.uuid == uuid);
  if (!user)
    return NextResponse.json(
      { error: "Нужна авторизация!!!" },
      { status: 401 }
    );

  const limit = Number(searchParams.get(`limit`)) || 20;
  const offset = Number(searchParams.get(`offset`)) || 0;
  const search = searchParams.get(`search`) || undefined;

  const data = dataTable.filter((el) => {
    if (!!search) {
      if (el?.url?.includes(search)) return el;
    }
    if (!search) return el;
  });
  let response = NextResponse.json({
    data: data.slice(offset, offset + limit),
    meta: { limit: limit, offset: offset, total: data.length },
  });
  return response;
}
