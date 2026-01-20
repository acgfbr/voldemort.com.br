import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contador de Mortes do Lord Voldemort | Real Oficial: 60 Créditos Grátis",
  description:
    "O Lorde das Trevas matou o Harry Potter de novo e te deu 60 créditos grátis no Real Oficial. Coincidência? Acho que não. Transforme seus vídeos em cortes virais com o poder das trevas.",
  keywords: [
    "Voldemort",
    "Contador de Mortes",
    "Harry Potter",
    "Lorde das Trevas",
    "Real Oficial",
    "Cortes Virais",
    "60 Créditos Grátis",
    "IA",
  ],
  authors: [{ name: "Real Oficial", url: "https://realoficial.com.br" }],
  creator: "Real Oficial",
  metadataBase: new URL("https://voldemort.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://voldemort.com.br",
    siteName: "Contador de Mortes do Lord Voldemort",
    title: "Real Oficial: 60 Créditos Grátis | Presente do Lorde das Trevas",
    description:
      "Voldemort matou o Potter e sobrou um presente pra você: 60 créditos grátis pra fazer cortes virais. Você ganhou o poder das trevas.",
    images: [
      {
        url: "https://cdn.realoficial.com.br/og-image-voldemort.jpg",
        width: 1200,
        height: 630,
        alt: "Real Oficial - 60 Créditos Grátis - Você ganhou o poder das trevas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@acgfbr",
    title: "Real Oficial: 60 Créditos Grátis | Presente do Lorde das Trevas",
    description:
      "Voldemort matou o Potter e sobrou um presente pra você: 60 créditos grátis pra fazer cortes virais.",
    images: ["https://cdn.realoficial.com.br/og-image-voldemort.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💀</text></svg>"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
