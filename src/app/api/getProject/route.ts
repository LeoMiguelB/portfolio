"use server"

import * as fs from "fs";
import path from "path";
import axios from "axios";
import NodeCache from "node-cache";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

// constants
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCOUNT_PERSONAL = "LeoMiguelB"
const API_URL = "https://api.github.com";

const cache = new NodeCache({
    stdTTL: 1800,
    checkperiod: 300,
});



async function getDataFromCacheOrApi<T>(cacheKey: string, apiCall: () => Promise<T>): Promise<T> {
    const cachedData: CachedData<T> | undefined = cache.get(cacheKey);

    if (cachedData && cachedData.key === cacheKey) {
        return cachedData.data;
    }

    const freshData = await apiCall();

    cache.set(cacheKey, { key: cacheKey, data: freshData });

    return freshData;
}

export async function GET(req: Request, res: Response) {
    const { searchParams } = new URL(req.url);

    const slug = searchParams.get("slug");

    try {
        const apiResult = await getDataFromCacheOrApi(`projectData-${slug}`, async () => {

            const response = await axios.get(`${API_URL}/users/${ACCOUNT_PERSONAL}/repos`, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            });
            const data = response.data;

            const result = data.filter((item: RepoData) => item.name === slug);

            let projects: Array<LocalRepo> | string = await fs.promises.readFile(path.join(process.cwd(), "/data/projectData/index.json"), "utf-8");

            projects = JSON.parse(projects);

            const projectData: Array<LocalRepo> = []

            if (Array.isArray(projects)) {
                projects.forEach((project: LocalRepo) => {
                    if (result[0].name === project.repo_name) {
                        project.overview = result[0].description;
                        project.links.github = result[0].html_url;
                        project.links.hosted =
                            result[0].homepage !== ""
                                ? result[0].homepage
                                : false;
                        projectData.push(project);
                    }
                });
                return projectData[0];
            }

        });

        return new Response(JSON.stringify(apiResult), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "internal server error" }), { status: 500 });
    }
}