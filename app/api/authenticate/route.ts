// Это симуляция запроса на бек, тут ничего не меняй!!!

import { NextResponse } from "next/server";
import { usersList } from "../_const/users";

export async function POST(request: Request, context: any) {
  const res: { login: string; password: string } = await request.json();
  if (!res.login || !res.password) return NextResponse.error();
  const user = usersList.find(
    (el) => el.login == res.login && el.password == res.password
  );
  if (!user)
    return NextResponse.json(
      { error: "Неверный логин или пароль" },
      { status: 500 }
    );
  let response = NextResponse.json({ access_token: user.uuid });
  return response;
}
