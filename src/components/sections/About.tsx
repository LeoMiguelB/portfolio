"use client"

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about-me">
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
                        delay: 0.8,
                    }}
                    className="inline"
                >
                    About Me
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
                        delay: 0.9,
                    }}
                    className="h-[2px] mobile:w-[60%] tablet:w-[80%] laptop:w-[80%] desktop:w-[80%] inline-block bg-[#350078]"
                ></motion.div>
            </div>
            <div className="flex justify-between items-start mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem] mobile:flex-col tablet:flex-col laptop:flex-row desktop:flex-row">
                <div className="mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] text-[1rem]">
                    <motion.p
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
                    >
                        Hi, if you haven’t already known by now, my name is Leo.
                        I am currently a student at the University of Guelph enrolled in the
                        computer science Co-op program.
                        {" "}
                    </motion.p>
                    <br />
                    <motion.p
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
                    >
                        From Reading other About Me’s on other portfolio’s, I can say my journey
                        with programming is quite bizarre. I started at the tender age of 11 when
                        I played around with scratch and made my first game, which was a flappy bird clone.
                        Then the years
                        following I started producing music as a hobby, and through this experience
                        I walked a through intersections where programming where programming allowed
                        me to make my life easier such as the time where I built a simple program with
                        FFmpeg to merge a picture and an audio into one video so I could upload an
                        instrumental to youtube.
                    </motion.p>
                    <br />
                    <motion.p
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
                            delay: 0.7,
                        }}
                    >
                        Towards the end of my highschool to now, I have worked with frameworks
                        such as <span className="text-[#704dfc]">Node.js</span>, {" "}
                        <span className="text-[#704dfc]">React.js</span>, {" "}
                        <span className="text-[#704dfc]">Redux.js</span>, {" "}
                        and <span className="text-[#704dfc]">Next.js</span>. Throughout these years
                        I have gained the knowledge to be fluent in <span className="text-[#704dfc]">C</span>,{" "}
                        <span className="text-[#704dfc]">Java</span>,
                        and <span className="text-[#704dfc]">Javascript</span>.
                    </motion.p>
                    <br />
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
                        delay: 0.8,
                    }}
                >

                </motion.div>
            </div>
        </section>
    )
}