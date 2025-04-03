import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/Header/Header";
import Head from "next/head";

export const metadata: Metadata = {
  title: "NextPlay",
  description: "Dando visibilidade para nossas promessas",
};

export default function RootLayout({ children, } : Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" href="/next.svg" type="image/svg" />
      </head>
      <body>
        < Header />
        {children}
      </body>
    </html>
  );
}
