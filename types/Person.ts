import type ContactMethod from "@/types/ContactMethod";
import type SkillGroup from "@/types/SkillGroup";
import type Experience from "@/types/Experience";

/**
 * A person.
 */
export default interface Person {

    /**
     * The name of the person.
     */
    name: string;

    /**
     * The title of the person.
     */
    title: string;

    /**
     * The description of the title of the person.
     */
    titleDescription: string;

    /**
     * A summary of the person.
     */
    summary: string;

    /**
     * The methods of contacting the person.
     */
    contactMethods: Array<ContactMethod>;

    /**
     * The groups of skills the person has acquired.
     */
    skillGroups: Array<SkillGroup>;

    /**
     * The experiences the person has worked.
     */
    experiences: Array<Experience>;

};
