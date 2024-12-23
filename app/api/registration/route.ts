// Это симуляция запроса на бек, тут ничего не меняй!!!

import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { usersList } from "../_const/users";

export async function POST(request: Request, context: any) {
  // console.log(request.headers.get(`authorization`));
  const res: { login: string; password: string } = await request.json();
  if (!res.login || !res.password) return NextResponse.error();
  const user = usersList.find((el) => el.login == res.login);
  if (!!user)
    return NextResponse.json(
      { error: "Такой логин уже есть!" },
      { status: 500 }
    );
  const uuid = uuidv4();
  usersList.push({
    login: res.login,
    password: res.password,
    uuid: uuid,
  });
  let response = NextResponse.json({ access_token: uuid });
  return response;
}
