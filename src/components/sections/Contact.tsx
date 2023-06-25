"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin, Github, Mail } from "lucide-react"

export default function Contact() {
    return (
        <section id="getintouch">
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
                        delay: 0.4,
                    }}
                    className="h-[2px] mobile:w-[15%] tablet:w-[15%] laptop:w-[30%] desktop:w-[30%] inline-block bg-ab"
                ></motion.div>
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
                    className="inline"
                >
                    Contact Me
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
                    className="h-[2px] mobile:w-[24%] tablet:w-[24%] laptop:w-[40%] desktop:w-[40%] inline-block bg-ab"
                ></motion.div>
            </div>
            <div className="flex flex-col justify-center items-center mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem] gap-10">
                <div className="flex justify-evenly items-start rounded-[5px] flex-wrap relative gap-4 mobile:flex-col tablet:flex-col laptop:flex-row desktop:flex-row bg-ag w-full p-5 mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[1rem] desktop:text-[1rem]">
                    <div className="flex flex-col justify-start gap-5 mobile:items-start tablet:items-start laptop:items-center desktop:items-center">
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
                                duration: 1,
                                delay: 0.3,
                                type: "spring",
                            }} className="font-bold text-[2rem]">Let&apos;s talk</motion.div>
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
                                duration: 1,
                                delay: 0.5,
                                type: "spring",
                            }}
                            className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] text-[1rem] font-bold hover:cursor-pointer"
                        >
                            <div>
                                <Mail />
                            </div>
                            <Link href={"mailto:leo.miguel.bantl@gmail.com"}>
                                Email Me
                            </Link>
                        </motion.div>
                    </div>
                    <div className="flex flex-col justify-start gap-5 mobile:items-start tablet:items-start laptop:items-center desktop:items-center">
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
                                duration: 1,
                                delay: 0.3,
                                type: "spring",
                            }} className="font-bold text-[2rem]">Socials</motion.div>
                        <div className="flex flex-col justify-start items-start gap-3">
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
                                    duration: 1,
                                    delay: 0.7,
                                    type: "spring",
                                }}
                            >
                                <Link
                                    target="_blank"
                                    href={
                                        "https://www.linkedin.com/in/leo-bantolino/"
                                    }
                                >
                                    <div className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] rounded-[8px] text-[1rem] font-bold">
                                        <div>
                                            <Linkedin />
                                        </div>
                                        <div>Leo Bantolino</div>
                                    </div>
                                </Link>
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
                                    duration: 1,
                                    delay: 0.8,
                                    type: "spring",
                                }}
                            >
                                <Link
                                    target="_blank"
                                    href={"https://github.com/LeoMiguelB"}
                                >
                                    <div className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] rounded-[8px] text-[1rem] font-bold">
                                        <div>
                                            <Github />
                                        </div>
                                        <div >@LeoMiguelB</div>
                                    </div>
                                </Link>
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
                                    duration: 1,
                                    delay: 0.8,
                                    type: "spring",
                                }}
                            >
                                <Link
                                    target="_blank"
                                    href={"https://instagram.com/miguel.b_pna"}
                                >
                                    <div className="gap-3 flex flex-row justify-center items-center px-[1rem] py-[0.50rem] rounded-[8px] text-[1rem] font-bold">
                                        <div>
                                            <Instagram />
                                        </div>
                                        <div>@miguel.b_pna</div>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}