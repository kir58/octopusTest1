import App from "@/src/app-src";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const roboto = Roboto({ subsets: ["cyrillic", "latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Заголовок",
  description: "Болванка для сайта",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
