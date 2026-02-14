import { Skill } from "@/types/Skill";
import classNames from "@/components/SkillPreview/SkillPreview.module.scss";

type Props = {
    skill: Skill;
};

export default function SkillPreview({ skill }: Props) {
    return <span className={classNames.root}>{skill.name}</span>;
}
