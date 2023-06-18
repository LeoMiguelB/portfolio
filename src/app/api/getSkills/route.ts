"use server"

import * as fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const data = await fs.promises.readdir(path.join(process.cwd(), 'data/skillData/skills'));
    let allSkills: Array<SkillSet> = [];
    let skills: string;

    const skillPromises = data.map(async (item) => {
        const skills = await fs.promises.readFile(path.join(process.cwd(), '/data/skillData/skills/', item), "utf-8");
        return JSON.parse(skills);
    });


    allSkills = await Promise.all(skillPromises);

    allSkills.sort((a, b) => a.index - b.index);


    // new syntax nextjs 13s
    return new Response(JSON.stringify(allSkills));

    // old way ->
    // return res.status(200).send(allSkills);  

}