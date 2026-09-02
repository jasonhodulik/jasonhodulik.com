import type Person from "@/types/Person";
import classNames from "@/components/Profile/Profile.module.scss";
import Intro from "@/components/Intro/Intro";
import ProfileSection from "@/components/ProfileSection/ProfileSection";
import Summary from "@/components/Summary/Summary";
import ExperiencesList from "@/components/ExperiencesList/ExperiencesList";

interface Props {
    person: Person;
};

export default function Profile({ person }: Props) {
    return (
        <main className={classNames.root}>
            <Intro person={person} />
            <Summary person={person} />
            <ProfileSection name="Experience">
                <ExperiencesList experiences={person.experiences} />
            </ProfileSection>
        </main>
    );
}
