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
        <div className="flex flex-col justify-between items-stretch rounded-[5px] bg-ag mobile:w-[100%] tablet:w-[20rem] laptop:w-[20rem] desktop:w-[20rem] h-[16rem] p-5 hover:-translate-y-[7px] transition-all ease-cubic-bezier delay-0 opacity duration-400">
            <Link target="_top" href={`/project/${slug}`}>
                <div className="text-[25px] font-bold">{title}</div>
                <div className="h-[2px] mobile:w-[60%] tablet:w-[80%] laptop:w-[70%] desktop:w-[70%]  inline-block bg-ab"></div>
                <div className="py-5 h-fit font-semibold text-aw">
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
