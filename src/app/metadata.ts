import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contador de Mortes do Lord Voldemort | Aquele-Que-Não-Deve-Ser-Nomeado",
  description: "Junte-se ao lado das trevas e testemunhe o poder d'Aquele-Que-Não-Deve-Ser-Nomeado. Veja o contador de mortes aumentar a cada visitante. Trouxas, cuidado!",
  keywords: ["Voldemort", "Contador de Mortes", "Harry Potter", "Lorde das Trevas", "Avada Kedavra", "Magia", "Mundo Bruxo"],
  openGraph: {
    title: "Contador de Mortes do Lord Voldemort",
    description: "Testemunhe o poder d'Aquele-Que-Não-Deve-Ser-Nomeado",
    images: [
      {
        url: '/rindo.webp',
        width: 1200,
        height: 630,
        alt: 'Lord Voldemort',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contador de Mortes do Lord Voldemort",
    description: "Testemunhe o poder d'Aquele-Que-Não-Deve-Ser-Nomeado",
    images: ['/rindo.webp'],
  },
}; 