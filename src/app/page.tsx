"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero"
import styles from "./index.module.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import useAxios from "../../hooks/useAxios";
import Skills from "@/components/sections/Skills";

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
  const [skills, setSkills] = useState<Array<SkillSet>>([]);

  const skillData = useAxios({
    method: 'get',
    url: '/api/getSkills',
    headers: JSON.stringify({ accept: '*/*' }),
  });

  useEffect(() => {
    if (skillData.response !== null) setSkills(skillData.response);
    if (skillData.error) console.log(skillData.error)
  }, [skillData]);

  return (
    <main className={inter.className}>
      <Navigation />
      <Hero />
      <div className={`${styles.container} ${inter.className}`}>
        <About />
        <Skills skills={skills} />
      </div>
    </main>
  )
}
