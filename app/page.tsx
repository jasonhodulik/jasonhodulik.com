import type { Metadata } from "next";
import Profile from "@/components/Profile/Profile";
import Boilerplate from "@/components/Boilerplate/Boilerplate";
import person from "@/data/person";
import { base } from "@/data/urls";

export const metadata: Metadata = {
    title: `${person.name}, ${person.title}`,
    description: person.summary,
    alternates: {
        canonical: base.href
    }
};

export default function Page() {
    return <>
        <Profile person={person} />
        <Boilerplate />
    </>;
}
