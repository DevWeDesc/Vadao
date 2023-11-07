import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Vadão Restaurante",
  description:
    "Torne sua refeição uma experiência inesquecível no Restaurante do Vadão, onde a tradição culinária brasileira ganha vida. Descubra uma variedade de pratos autênticos que celebram os sabores ricos e vibrantes do Brasil. De suculentas carnes grelhadas a pratos típicos como feijoada e acarajé, nossa cozinha é uma viagem gastronômica que agrada a todos os paladares. Sinta-se em casa com nossa hospitalidade calorosa e desfrute de uma refeição que é uma verdadeira celebração da cultura brasileira. Faça uma reserva agora e mergulhe no mundo de sabores que só o Brasil pode oferecer.",
  verification: {
    google: "hIF2FiUO5JW0zMk70felqVUGDRVWeGcSjp_7fnzrmxg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-beigeDefault`}>{children}</body>
    </html>
  );
}
