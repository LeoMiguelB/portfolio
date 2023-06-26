import '../../globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ResolvingMetadata } from 'next'
import * as fs from "fs";
import path from "path";

const inter = Inter({ subsets: ['latin'] })

type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug;

    let projectDetails: any;

    let projects: any = await fs.promises.readFile(path.join(process.cwd(), "/data/projectData/index.json"), "utf-8");
    projects = JSON.parse(projects);
    projects.forEach((project: any) => {
        if (slug === project.repo_name) {
            projectDetails = project;
        }
    });

    return {
        title: projectDetails['title']
            ? projectDetails.title
            : "Project",
        description: `page for my project ${projectDetails.title}`,
    }
}

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
