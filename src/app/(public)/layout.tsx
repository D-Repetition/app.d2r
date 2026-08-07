import Topbar from "@/components/ui/topbar"
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "../globals.css";
import Footer from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "D²Répétition - Cours de répétition à domicile",
    template: "%s | D²Répétition",
  },
  description: "Un seul outil pour suivre les cours, coordonner les professeurs et donner aux parents une visibilité totale sur le parcours de leur enfant.",
  keywords: ["répétition", "cours à domicile", "soutien scolaire", "suivi scolaire", "Lomé", "Togo"],
  authors: [{ name: "D²Répétition" }],
  creator: "D²Répétition",
  metadataBase: new URL("https://d2repetition.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://d2repetition.com",
    siteName: "D²Répétition",
    title: "D²Répétition — Cours de répétition à domicile",
    description: "Un seul outil pour suivre les cours, coordonner les professeurs et donner aux parents une visibilité totale sur le parcours de leur enfant.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D²Répétition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D²Répétition",
    description: "Plateforme de gestion des cours de répétition à domicile.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PublicLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html>
      <body className={`${inter.variable} ${dmSerifDisplay.variable} min-h-screen w-full font-sans relative`}>
        <Topbar />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
        <a href="https://wa.me/+22872333842?text=j'aimerais en savoir plus sur d²Répétition" className="animate-ping fixed bottom-4 lg:bottom-12 right-4 lg:right-12 h-12 lg:h-16 w-12 lg:w-16 rounded-full shadow-2xl flex items-center justify-center bg-[#2CBA42]">
          <img src="/images/whatsapp.png" className="h-8 w-8 shrink-0" alt="" />
        </a>
        <a href="https://wa.me/+22872333842?text=j'aimerais en savoir plus sur d²Répétition" className="cursor-pointer fixed bottom-4 lg:bottom-12 right-4 lg:right-12 h-12 lg:h-16 w-12 lg:w-16 rounded-full shadow-2xl flex items-center justify-center bg-[#2CBA42]">
          <img src="/images/whatsapp.png" className="h-8 w-8 shrink-0" alt="" />
        </a>
      </body>
    </html>
  )
}

export default PublicLayout