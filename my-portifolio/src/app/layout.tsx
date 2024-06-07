import type { Metadata } from "next";
import { Quicksand, Bebas_Neue } from "next/font/google";
import RealceFont from 'next/font/local'
import "./globals.css";

const quicksand = Quicksand({ 
  subsets: ["latin"]
});

const realce = Bebas_Neue({
  weight: "400",
  variable: '--font-realce',
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portifóllio - Amanda Oliveira",
  description: "Meu portifóllio, falando um pouco sobre mim e mostrando meus projetos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${quicksand.className} ${realce.variable}`}>{children}</body>
    </html>
  );
}
