import Footer from "@/components/ui/footer";
import Topbar from "@/components/ui/topbar";
import Link from "next/link";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Images } from "@/constants/images";
import Button from "@/components/ui/atomes/Button";

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


export default function NotFound() {
  return (
    <html>
      <body className={`${inter.variable} ${dmSerifDisplay.variable} min-h-screen w-full font-sans`}>
        <Topbar />
        <main className="min-h-screen w-full relative">
          <div className="h-[4%] w-full absolute z-1 bottom-0 left-0 right-0 bg-board-black rounded-[54px_54px_0px_0px]"></div>
          <section className="w-full min-h-screen mx-auto flex flex-col items-center justify-center gap-6 lg:gap-[75px] relative">
            <div className="w-full max-lg:max-w-[90%] max-lg:mx-auto flex flex-col items-center justify-start">
              <Image src={Images.NF} className="max-lg:h-60 lg:h-[40vh] w-auto object-contain" alt="Illustration familles et accompagnement scolaire" />
              <div className="flex flex-col items-center justify-start max-lg:gap-4 lg:gap-8 w-full">
                <div className="title text-center lg:max-w-[60%]">Oups!!!</div>
                <div className="text-center subtitle font-normal! lg:max-w-[25%]">Cette page semble introuvable. Explorons ensemble un autre chemin.</div>
                <Link href="/"><Button className='bg-blue-navy text-white max-lg:w-full'>Retour à l'accueil</Button></Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
