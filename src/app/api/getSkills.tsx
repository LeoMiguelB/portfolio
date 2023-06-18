"use server"

import * as fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

interface SkillDetails {
    name: string,
    icon: string,
}

interface SkillSet {
    title: string,
    skills: Array<SkillDetails>,
    index: number
}

export default async function getSkills(req: NextApiRequest, res: NextApiResponse) {
    const data = await fs.promises.readdir(path.join(process.cwd(), 'data/skillData/skills'));
    let allSkills: Array<SkillSet> = [];
    let skills: Buffer;

    data.forEach(async (item) => {
        skills = await fs.promises.readFile(path.join(process.cwd(), 'data/skillData/skills/' + item, 'utf-8'));
        allSkills.push(JSON.parse(skills.toString()));
    })

    allSkills.sort((a, b) => a.index - b.index);

    res.status(200).send(allSkills);
}