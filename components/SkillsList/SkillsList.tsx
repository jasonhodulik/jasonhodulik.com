import type Skill from "@/types/Skill";
import classNames from "@/components/SkillsList/SkillsList.module.scss";
import SkillPreview from "@/components/SkillPreview/SkillPreview";

interface Props {
    skills: Array<Skill>;
};

export default function SkillsList({ skills }: Props) {
    return (
        <ul className={classNames.root}>
            {skills.map((skill, index) => <li key={index}><SkillPreview skill={skill} /></li>)}
        </ul>
    );
}
