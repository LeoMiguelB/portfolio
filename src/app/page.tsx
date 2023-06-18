import Hero from "@/components/sections/Hero"
import styles from "./index.module.css";
import { Montserrat } from "next/font/google";

import { Metadata } from "next";

import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  generator: 'Next.js',
  title: "Personal Portfolio",
  description: "Leo studies computer science at University of Guelph",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google',
    other: {
      me: ['leo.miguel.bantl@gmail.com'],
    },
  },
  keywords: ['web dev', 'web development', 'personal portfolio'],
}

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Navigation />
      <Hero />
      {/* <div className={`${styles.container} ${inter.className}`}>
      </div> */}
    </main>
  )
}
