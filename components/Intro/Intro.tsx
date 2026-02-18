import type Person from "@/types/Person";
import classNames from "@/components/Intro/Intro.module.scss";
import ContactMethodsList from "@/components/ContactMethodsList/ContactMethodsList";

interface Props {
    person: Person;
};

export default function Intro({ person }: Props) {
    return (
        <header className={classNames.root}>
            <hgroup>
                <h1>{person.name}</h1>
                <p>{person.title}</p>
            </hgroup>
            <ContactMethodsList contactMethods={person.contactMethods} />
        </header>
    );
}
