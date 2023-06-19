"use client"

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
    title: any,
    slug: any,
    overview: any,
    stack: any,
    links: any,
}

export default function ProjectCard({ title, slug, overview, stack, links }: ProjectCardProps) {
    return (
        <div className="flex flex-col justify-between items-stretch rounded-[5px] bg-[#110036] mobile:w-[100%] tablet:w-[20rem] laptop:w-[20rem] desktop:w-[20rem] h-[16rem] p-5 hover:-translate-y-[7px] transition-all ease-cubic-bezier delay-0 opacity duration-[0.25s]">
            <Link target="_top" href={`/projects/${slug}`}>
                <div className="text-[25px] font-bold">{title}</div>
                <div className="py-5 h-fit font-semibold text-[#c2c2c2]">
                    {overview.length > 110
                        ? overview.slice(0, 110) + " ..."
                        : overview.slice(0, 110)}
                </div>
            </Link>
            <div className="flex flex-row justify-between items-center">
                {stack.slice(0, 3).map((item: any, i: number) => (
                    <div key={i} className="text-[12px] text-[#a4a4a4]">
                        #{item}
                    </div>
                ))}
                <div className="flex flex-row justify-center items-center gap-3">
                    <a
                        target="_blank"
                        href={links.github}
                        rel="noopener noreferrer"
                    >
                        <Github />
                    </a>
                    {!links.hosted ? (
                        ""
                    ) : (
                        <a
                            target="_blank"
                            href={links.hosted}
                            rel="noopener noreferrer"
                        >
                            <Linkedin />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
