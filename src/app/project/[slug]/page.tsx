"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../index.module.css";
import { Minus, Link as IconLink, Github, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useAxios from "../../../../hooks/useAxios";
import { Metadata, ResolvingMetadata } from 'next'


type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug;

    const { response: projectDetails }: any | null = await fetch(`/api/getProject?slug=${slug}`, {
        method: 'GET',
        headers: {
            'accept': '*/*'
        },
    }).then((res) => res.json())


    return {
        title: projectDetails['title']
            ? projectDetails.title + " | Projects"
            : "Projects",
        description: `page for my project ${projectDetails.title}`,
    }
}

export default function SlugPage({ params }: { params: { slug: string } }) {

    const [projectDetails, setProjectDetails] = useState<any>([]);
    const [loading, setLoading] = useState(false);


    const projectData = useAxios({
        method: "get",
        url: `/api/getProject?slug=${params.slug}`,
        headers: JSON.stringify({ accept: "*/*" }),
    });


    useEffect(() => {
        setLoading(true);
        if (projectData.response !== null) {
            setProjectDetails(projectData.response);
            setLoading(false)
        }
    }, [params.slug, projectData]);



    return (
        <>
            <div className="mt-[60px]">
                <div className={styles.container}>
                    <div className="flex flex-col justify-center items-start gap-10">
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="text-[3rem] font-semibold">
                                    {projectDetails?.title}
                                </div>
                                {(projectDetails.links?.hosted ?? false) && (
                                    <Link
                                        target="_blank"
                                        href={projectDetails.links.hosted}
                                    >
                                        <IconLink />
                                    </Link>
                                )}
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="mobile:block tablet:block laptop:block desktop:block">
                                    <Link href={"/"}>
                                        <Home className="text-[2rem]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[2rem] desktop:text-[2rem] font-bold w-[100%]">
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
                                className="inline"
                            >
                                Overview
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
                                    delay: 0.5,
                                }}
                                className="h-[2px] mobile:w-[70%] tablet:w-[70%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#350078]"
                            ></motion.div>
                        </div>
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
                                delay: 0.2,
                            }}
                        >
                            {projectDetails?.overview}
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
                                delay: 0.6,
                            }}
                            className="h-[2px] w-full inline-block bg-[#350078]"
                        ></motion.div>
                        <div className="flex flex-row items-start gap-5 flex-wrap mobile:justify-start tablet:justify-start laptop:justify-center desktop:justify-center">
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
                                    delay: 0.3,
                                }}
                                className="flex flex-col justify-center items-start gap-5 rounded-[5px] border-solid border-[2px] border-[#350078] p-4"
                            >
                                <div className="text-[1rem] font-semibold">
                                    Technologies
                                </div>
                                {projectDetails.stack?.map((item: any, i: number) => (
                                    <div
                                        className="flex flex-row justify-center items-center gap-2"
                                        key={i}
                                    >
                                        <Minus />
                                        {item}
                                    </div>
                                ))}
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
                                    delay: 0.3,
                                }}
                                className="flex flex-col justify-center items-center gap-5 rounded-[5px] border-solid border-[2px] border-[#350078] p-4"
                            >
                                <div className="text-[1rem] font-semibold">
                                    Type
                                </div>
                                <div>{projectDetails?.type}</div>
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
                                    delay: 0.3,
                                }}
                                className="flex flex-col justify-center items-center gap-5 rounded-[5px] border-solid border-[2px] border-[#350078] p-4"
                            >
                                <div className="text-[1rem] font-semibold">
                                    Timeline
                                </div>
                                <div>
                                    <div className="flex flex-row justify-evenly items-center gap-1">
                                        <div>Start date: </div>
                                        <div>
                                            {projectDetails.timeline?.startDate}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-evenly items-center gap-1">
                                        <div>End date: </div>
                                        <div>
                                            {projectDetails.timeline?.endDate
                                                ? projectDetails.timeline
                                                    .endDate
                                                : "Present"}
                                        </div>
                                    </div>
                                </div>
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
                                    delay: 0.3,
                                }}
                                className="flex flex-col justify-center items-center gap-5 rounded-[5px] border-solid border-[2px] border-[#350078] p-4"
                            >
                                <div className="text-[1rem] font-semibold">
                                    Associated
                                </div>
                                <div className="flex flex-row justify-evenly items-center">
                                    {projectDetails.associated?.name}
                                </div>
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
                                    delay: 0.3,
                                }}
                                className="flex flex-col justify-center items-center gap-5 rounded-[5px] border-solid border-[2px] border-[#350078] p-4"
                            >
                                <div className="text-[1rem] font-semibold">
                                    Links
                                </div>
                                <div className="flex flex-row justify-evenly items-center flex-wrap gap-2">
                                    {projectDetails.links?.github && (
                                        <Link
                                            target="_blank"
                                            href={projectDetails.links.github}
                                        >
                                            <Github />
                                        </Link>
                                    )}
                                    {(projectDetails.links?.hosted ??
                                        false) && (
                                            <Link
                                                target="_blank"
                                                href={projectDetails.links.hosted}
                                            >
                                                <IconLink />
                                            </Link>
                                        )}
                                </div>
                            </motion.div>
                        </div>

                        {projectDetails.images && (
                            <>
                                <div className="flex flex-row justify-between items-center mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[2rem] desktop:text-[2rem] font-bold w-[100%]">
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
                                            delay: 0.5,
                                        }}
                                        className="inline"
                                    >
                                        Gallery
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
                                            delay: 0.6,
                                        }}
                                        className="h-[2px] mobile:w-[70%] tablet:w-[70%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#350078]"
                                    ></motion.div>
                                </div>
                                <div className="flex flex-row justify-start items-center flex-wrap gap-5">
                                    {projectDetails.images?.map((image: any, i: number) => (
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
                                                delay: 0.5,
                                            }}
                                            key={i}
                                        >
                                            <Image
                                                src={image.path}
                                                alt={image.alt}
                                                width={400}
                                                height={600}
                                                priority
                                                className="w-[100%] border-[2px] mt-5 border-solid border-[#350078] rounded-[5px] p-3"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}


