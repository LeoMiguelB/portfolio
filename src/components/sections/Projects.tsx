"use client"

import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

type ProjectsProps = {
    projects: Array<any>,
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects">
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-row justify-between items-center mt-[7rem] mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[3rem] desktop:text-[3rem] font-bold w-[100%]">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                        }}
                        className="inline mobile:text-[1rem] tablet:text-[2rem] laptop:text-[2.5rem] desktop:text-[2.5rem]"
                    >
                        Projects I&apos;ve worked on
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                        }}
                        className="h-[2px] mobile:w-[25%] tablet:w-[30%] laptop:w-[50%] desktop:w-[50%] inline-block bg-[#350078]"
                    ></motion.div>
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap gap-4 mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem]">
                    {projects?.map((project, i) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: i / 10,
                            }}
                            key={i}
                        >
                            <ProjectCard
                                title={project.title}
                                slug={project.repo_name}
                                stack={project.stack}
                                overview={project.overview}
                                links={project.links}
                                key={i}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
