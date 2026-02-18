import type Experience from "@/types/Experience";
import classNames from "@/components/ExperiencesList/ExperiencesList.module.scss";
import ExperienceSummary from "@/components/ExperienceSummary/ExperienceSummary";

interface Props {
    experiences: Array<Experience>;
};

export default function ExperiencesList({ experiences }: Props) {
    return (
        <ol className={classNames.root}>
            {experiences.map((experience, index) => <li key={index}><ExperienceSummary experience={experience} /></li>)}
        </ol>
    );
}
