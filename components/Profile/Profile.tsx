import type { Person } from "@/types/Person";
import classNames from "@/components/Profile/Profile.module.scss";
import Intro from "@/components/Intro/Intro";
import ProfileSection from "@/components/ProfileSection/ProfileSection";
import SkillGroupsList from "@/components/SkillGroupsList/SkillGroupsList";
import ExperiencesList from "@/components/ExperiencesList/ExperiencesList";

type Props = {
    person: Person;
};

export default function Profile({ person }: Props) {
  return (
    <main className={classNames.root}>
        <Intro person={person} />
        <ProfileSection name="Skills">
            <SkillGroupsList skillGroups={person.skillGroups} />
        </ProfileSection>
        <ProfileSection name="Experience">
            <ExperiencesList experiences={person.experiences} />
        </ProfileSection>
    </main>
  );
}
