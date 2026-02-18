import type Skill from "@/types/Skill";

/**
 * A group of skills.
 */
export default interface SkillGroup {

    /**
     * A name categorizing the grouped skills.
     */
    name: React.ReactNode;

    /**
     * A description summarizing the grouped skills.
     */
    description: React.ReactNode;

    /**
     * THe grouped skills.
     */
    skills: Array<Skill>;

};
