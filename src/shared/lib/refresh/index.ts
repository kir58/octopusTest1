"use server";

import { redirect } from "next/navigation";

export const refreshCurrentPage = (url: string) => {
  redirect(url);
};
