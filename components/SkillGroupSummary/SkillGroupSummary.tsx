import type SkillGroup from "@/types/SkillGroup";
import classNames from "@/components/SkillGroupSummary/SkillGroupSummary.module.scss";
import SkillsList from "@/components/SkillsList/SkillsList";

interface Props {
    skillGroup: SkillGroup;
};

export default function SkillGroupSummary({ skillGroup }: Props) {
    return (
        <div className={classNames.root}>
            <hgroup>
                <h3>{skillGroup.name}</h3>
                <p>{skillGroup.description}</p>
            </hgroup>
            <SkillsList skills={skillGroup.skills} />
        </div>
    );
}
