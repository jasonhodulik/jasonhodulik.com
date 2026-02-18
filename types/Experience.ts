import type Organization from "@/types/Organization";
import type YearMonth from "@/types/YearMonth";

/**
 * An experience a person has or had at an organization.
 */
export default interface Experience {

    /**
     * The name of the experience.
     */
    name: string;

    /**
     * The formal job title assigned during the experience.
     */
    title: React.ReactNode;

    /**
     * The organization at which the experience occurred.
     */
    organization: Organization;

    /**
     * The year and month the experience started, if applicable.
     */
    start?: YearMonth;

    /**
     * The year and month the experience ended, if applicable.
     */
    end?: YearMonth;

    /**
     * A description of the experience.
     */
    description: React.ReactNode;

};
