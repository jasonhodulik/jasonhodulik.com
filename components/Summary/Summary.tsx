import type Person from "@/types/Person";
import classNames from "@/components/Summary/Summary.module.scss";
import SkillGroupsList from "@/components/SkillGroupsList/SkillGroupsList";

interface Props {
    person: Person;
};

export default function Summary({ person }: Props) {
    return (
        <div className={classNames.root}>
            <h2>{person.title}</h2>
            <p>{person.titleDescription}</p>
            <SkillGroupsList skillGroups={person.skillGroups} />
        </div>
    );
}
