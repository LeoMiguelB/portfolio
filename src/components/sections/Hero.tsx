import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Github, ChevronsDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="h-full">
            <div className="flex flex-col justify-between items-start mobile:mt-0 tablet:mt-0 laptop:mt-[2rem] desktop:mt-[2rem] mobile:mx-auto tablet:mx-auto laptop:mx-[50px] desktop:mx-[50px]">
                <div className="flex flex-row justify-center items-center mobile:block tablet:block laptop:flex desktop:flex">
                    <div className="flex flex-col mobile:justify-center tablet:justify-center laptop:justify-start desktop:justify-start mobile:h-[100vh] tablet:h-[100vh] laptop:h-auto desktop:h-auto mobile:items-center tablet:items-center laptop:items-start desktop:items-start mobile:w-[100vw] tablet:w-[100vw] laptop:w-[50vw] desktop:w-[50vw]">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                type: "spring",
                            }}
                            className="flex flex-row justify-center items-center mobile:text-[3rem] desktop:text-[5rem] laptop:text-[5rem] font-extrabold"
                        >
                            Welcome!
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                type: "spring",
                            }}
                            className="flex flex-row justify-center items-center text-[1.5rem] text-[#704dfc] font-extrabold"
                        >
                            My Name is Leo
                        </motion.div>

                        <div className="flex justify-start pt-[1.5rem] mobile:flex-col mobile:gap-5 mobile:items-center tablet:flex-col tablet:gap-5 tablet:items-start laptop:flex-row laptop:gap-0 laptop:items-center desktop:flex-row desktop:gap-0 desktop:items-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
                                    type: "spring",
                                }}
                                className="flex flex-row justify-center items-center w-full px-[1rem] py-[0.50rem] bg-[#704dfc] rounded-[8px] font-bold hover:cursor-pointer"
                            >
                                <Link href={"mailto:leo.miguel.bantl@gmai.com"}>Email</Link>
                            </motion.div>

                            {/* vertical bar divider*/}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.6,
                                    type: "spring",
                                }}
                                className="w-[2px] h-[50px] bg-white mx-[3rem] mobile:hidden tablet:hidden laptop:block desktop:block"
                            ></motion.div>

                            <div className="flex flex-row justify-evenly items-center mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] gap-5">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.7,
                                        type: "spring",
                                    }}
                                    className="flex flex-row justify-center items-center mobile:w-[3rem] mobile:h-[3rem] tablet:w-[3rem] tablet:h-[3rem] laptop:w-[2.5rem] laptop:h-[2.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] rounded-[17px]"
                                >
                                    <Link
                                        href={
                                            "https://www.linkedin.com/in/leo-bantolino/"
                                        }
                                        target={"_blank"}
                                        className="text-[#704dfc]"
                                    >
                                        <Linkedin className="scale-[120%]" />
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 1.2,
                                        type: "spring",
                                    }}
                                    className="flex flex-row justify-center items-center mobile:w-[3rem] mobile:h-[3rem] tablet:w-[3rem] tablet:h-[3rem] laptop:w-[2.5rem] laptop:h-[2.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] rounded-[17px]"
                                >
                                    <Link
                                        className="text-[#704dfc]"
                                        target={"_blank"}
                                        href={"https://github.com/LeoMiguelB"}
                                    >
                                        <Github className="scale-[150%]" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 1.4,
                                type: "spring",
                            }}
                            className="flex flex-row justify-start items-center mt-[3rem]"
                        >
                            <Link
                                className="px-[0.75rem] py-[0.50rem] border-[1px] border-solid border-[#704dfc] font-bold rounded-[10px] hover:cursor-pointer animate-glow"
                                target={"_blank"}
                                href={"/RESUME_JUNE_2023_3.pdf"}
                            >
                                Download Resume
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.8,
                        type: "spring",
                    }}
                    className="w-[100%] flex-row justify-center items-center mt-[3rem] mobile:hidden tablet:hidden laptop:flex desktop:flex"
                >
                    <a href="#about-me"><ChevronsDown className="scale-[180%] duration-500 hover:scale-[150%]" /></a>
                </motion.div>
            </div>
        </section>
    )
}