import type { ContactMethod } from "@/types/ContactMethod";
import type { SkillGroup } from "@/types/SkillGroup";
import type { Experience } from "@/types/Experience";

/**
 * A person.
 */
export type Person = {

    /**
     * The name of the person.
     */
    name: string;

    /**
     * The title of the person.
     */
    title: string;

    /**
     * A summary of the person.
     */
    summary: string;

    /**
     * The methods of contacting the person.
     */
    contactMethods: ContactMethod[];

    /**
     * The groups of skills the person has acquired.
     */
    skillGroups: SkillGroup[];

    /**
     * The experiences the person has worked.
     */
    experiences: Experience[];

};
