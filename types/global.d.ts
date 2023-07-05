export { }

declare global {
    interface SkillDetails {
        name: string,
        icon: string,
    }
    interface SkillSet {
        title: string,
        skills: Array<SkillDetails>,
        index: number
    }
    interface CachedData<T> {
        key: string,
        data: T
    }

    interface RepoData {
        name: string,
        description: string,
        html_url: string,
        homepage: boolean | string,
    }

    interface LocalRepo {
        repo_name: string,
        overview: string,
        links: {
            github: string,
            hosted: boolean
        }
    }
}