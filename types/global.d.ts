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
}