"use server"

import * as fs from "fs";
import axios from "axios";
import NodeCache from "node-cache";
import path from "path";
require('dotenv').config();


const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCOUNT_PERSONAL = "LeoMiguelB";
const API_URL = "https://api.github.com";

const cache = new NodeCache({
    stdTTL: 1800,
    checkperiod: 300,
})

// check if server has fresh cached data, if yes return the fresh/valid data 
async function getDataFromCacheOrApi(key: string, apiCall: any) {
    const cachedData = cache.get(key);

    if (cachedData) {
        return cachedData;
    }

    const freshData = await apiCall();
    cache.set(key, freshData);
    return freshData;
}

export async function GET(req: Request) {

    // check if the request method if GET, if otherwise return error message
    if (req.method !== "GET") {
        // res.status(405).json({ message: "Method Not Allowed" });
        return new Response("", { status: 405, statusText: "Method not allowed" });
    }

    // try to get the data
    try {
        // try to get the cached data
        const allProjects = await getDataFromCacheOrApi("projectData", async () => {

            // get the data from the personal GitHub account using authorized API token
            const response = await axios.get(`${API_URL}/users/${ACCOUNT_PERSONAL}/repos`,
                {
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                    },
                }
            );

            const data = response.data;

            let projects: any = await fs.promises.readFile(path.join(process.cwd(), "/data/projectData/index.json"), "utf-8");

            projects = JSON.parse(projects);


            const finalData: Array<any> = [];

            data.forEach((repo: any) => {
                finalData.push(repo);
            });

            finalData.sort((a, b) => new Date(a.pushed_at).valueOf() - new Date(b.pushed_at).valueOf()).reverse();

            const result: Array<any> = [];

            for (const item in finalData) {
                projects.forEach((project: any) => {
                    if (finalData[item].name === project.repo_name) {
                        project.overview = finalData[item].description;
                        project.links.github = finalData[item].html_url;
                        project.links.hosted =
                            finalData[item].homepage !== ""
                                ? finalData[item].homepage
                                : false;
                        result.push(project);
                    }
                });
            }

            return result;
        });

        // res.status(200).json(allProjects);
        return new Response(JSON.stringify(allProjects), { status: 200 })
    } catch (error) {
        // return res.status(500).send({
        //     success: false,
        //     message: "Internal Server Error.",
        // });
        console.log(error);
        return new Response("", { status: 500, statusText: "Internal Server Error" });
    }
}
