import { motion } from "framer-motion"
import SkillCardBlock from "@/components/SkillCardBlock"

type SkillCardProps = {
    title: string,
    skills: Array<SkillDetails>,
}

export default function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <div className="flex flex-col justify-center items-start gap-3 rounded-[5px] bg-[#110036] w-[100%] h-full p-[20px]">
            <div className="text-[25px] font-bold">{title}</div>
            <div className="flex flex-row justify-start items-center gap-5 flex-wrap">
                {skills?.map((skill, i) => (
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
                        <SkillCardBlock icon={skill.icon} name={skill.name} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}