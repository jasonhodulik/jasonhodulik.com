import type { SkillGroup } from "@/types/SkillGroup";
import classNames from "@/components/SkillGroupsList/SkillGroupsList.module.scss";
import SkillGroupSummary from "@/components/SkillGroupSummary/SkillGroupSummary";

type Props = {
    skillGroups: SkillGroup[];
};

export default function SkillGroupsList({ skillGroups }: Props) {
    return (
        <ul className={classNames.root}>
            {skillGroups.map((skillGroup, index) => <li key={index}><SkillGroupSummary skillGroup={skillGroup} /></li>)}
        </ul>
    );
}
