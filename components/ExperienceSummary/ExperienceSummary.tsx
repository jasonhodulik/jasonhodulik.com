import type Experience from "@/types/Experience";
import classNames from "@/components/ExperienceSummary/ExperienceSummary.module.scss";
import OrganizationPreview from "@/components/OrganizationPreview/OrganizationPreview";
import YearMonthRange from "@/components/YearMonthRange/YearMonthRange";

interface Props {
    experience: Experience;
};

export default function ExperienceSummary({ experience }: Props) {
    return (
        <div className={classNames.root}>
            <hgroup>
                <h3>{experience.name}</h3>
                <p>{experience.title}</p>
                <p><OrganizationPreview organization={experience.organization} /></p>
                <p><YearMonthRange start={experience.start} end={experience.end} /></p>
            </hgroup>
            <p>{experience.description}</p>
        </div>
    );
}
