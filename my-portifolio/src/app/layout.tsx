import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RealceFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"]
});

const realce = RealceFont({
  src: 'fonts/Realce-Black.woff2',
  variable: '--realce'
})

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
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
