import type { Metadata } from "next";
import { Marcellus, Jost } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-marcellus",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://italian1779.vercel.app"),
  title: "Italian 1779 Sapanca | İtalyan Restoranı",
  description:
    "Sapanca Kırkpınar'da zarif bir İtalyan restoranı. Taş fırın pizzalar, ev yapımı makarnalar, İtalyan tatlıları ve şık bir atmosfer. Masa ayırtmak için hemen WhatsApp'tan yazın.",
  keywords: [
    "Italian 1779",
    "Sapanca İtalyan restoranı",
    "Sapanca pizza",
    "Sapanca makarna",
    "İtalyan mutfağı Sakarya",
  ],
  openGraph: {
    title: "Italian 1779 Sapanca | İtalyan Restoranı",
    description:
      "Taş fırın pizzalar, ev yapımı makarnalar ve zarif bir atmosfer. Sapanca'da gerçek İtalyan mutfağı.",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Italian 1779 Sapanca",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${marcellus.variable} ${jost.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-parchment-50 font-sans text-olive-900">
        {children}
      </body>
    </html>
  );
}
