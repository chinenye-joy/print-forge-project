import "./globals.css";
import Link from "next/link";
import type { RootLayoutProps } from "@/index";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
              <div className="relative">
                {/* Desktop logo */}
                <Image
                  src="/printforge-logo 1.png"
                  alt="PrintForge Logo"
                  width={200}
                  height={200}
                  className="w-[200px] h-auto hidden md:block"
                />
                {/* Mobile logo */}
                <Image
                  src="/printforge-logo mobile.png"
                  alt="PrintForge Logo"
                  width={40}
                  height={40}
                  className="w-[40px] h-auto block md:hidden"
                />
              </div>
            </Link>
            <ul className="flex items-center gap-2.5">
              <li className="text-sm uppercase cursor-pointer">
                <Link href="/3D models">3d-models</Link>
              </li>

              <li className="text-sm uppercase cursor-pointer">
                <Link href="/about"> About </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
