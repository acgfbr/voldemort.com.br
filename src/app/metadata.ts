import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://voldemort.com.br'),
  title: "Contador de Mortes do Lord Voldemort | Real Oficial: 60 Créditos Grátis",
  description: "O Lorde das Trevas matou o Harry Potter de novo e te deu 60 créditos grátis no Real Oficial. Coincidência? Acho que não. Transforme seus vídeos em cortes virais com o poder das trevas.",
  keywords: ["Voldemort", "Contador de Mortes", "Harry Potter", "Lorde das Trevas", "Real Oficial", "Cortes Virais", "60 Créditos Grátis", "IA"],
  openGraph: {
    title: "Real Oficial: 60 Créditos Grátis | Presente do Lorde das Trevas",
    description: "Voldemort matou o Potter e sobrou um presente pra você: 60 créditos grátis pra fazer cortes virais. Você ganhou o poder das trevas.",
    images: [
      {
        url: 'https://cdn.realoficial.com.br/og-image-voldemort.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Oficial - 60 Créditos Grátis - Você ganhou o poder das trevas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Real Oficial: 60 Créditos Grátis | Presente do Lorde das Trevas",
    description: "Voldemort matou o Potter e sobrou um presente pra você: 60 créditos grátis pra fazer cortes virais.",
    images: ['https://cdn.realoficial.com.br/og-image-voldemort.jpg'],
  },
}; 