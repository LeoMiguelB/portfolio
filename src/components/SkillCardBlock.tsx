
import {
    NodejsOriginal,
    ExpressOriginal,
    PostgresqlPlain,
    NextjsLine,
    ReactOriginal,
    ReduxOriginal,
    TailwindcssPlain,
    COriginal,
    JavascriptOriginal,
    JavaOriginal,
    GithubOriginal,
    GitlabOriginal
} from "devicons-react";


type SkillCardBlockProps = {
    icon: string,
    name: string,
}

export default function SkillCardBlock({ icon, name }: SkillCardBlockProps) {
    let IconComponent = null;
    switch (icon) {
        case "ReactOriginal":
            IconComponent = ReactOriginal;
            break;
        case "NextjsLine":
            IconComponent = NextjsLine;
            break;
        case "TailwindcssPlain":
            IconComponent = TailwindcssPlain;
            break;
        case "JavascriptOriginal":
            IconComponent = JavascriptOriginal;
            break;
        case "PostgresqlPlain":
            IconComponent = PostgresqlPlain;
            break;
        case "NodejsOriginal":
            IconComponent = NodejsOriginal;
            break;
        case "ExpressOriginal":
            IconComponent = ExpressOriginal;
            break;
        case "ReduxOriginal":
            IconComponent = ReduxOriginal;
            break;
        case "GitlabOriginal":
            IconComponent = GitlabOriginal;
            break;
        case "JavaOriginal":
            IconComponent = JavaOriginal;
            break;
        case "COriginal":
            IconComponent = COriginal;
            break;
        case "GithubOriginal":
            IconComponent = GithubOriginal;
            break;
        default:
            break;
    }

    return (
        <div className="flex flex-row justify-evenly items-center gap-4 p-4 rounded-[5px] bg-[#350078]">
            {IconComponent && (
                <div>
                    <IconComponent className="scale-[150%]" />
                </div>
            )}
            <div>{name}</div>
        </div>
    );
} 