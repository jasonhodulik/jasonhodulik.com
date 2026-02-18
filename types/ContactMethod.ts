import ContactChannel from "@/types/ContactChannel";

/**
 * A method of contacting a person.
 */
export default interface ContactMethod {

    /**
     * The channel through which the person can be contacted.
     */
    channel: ContactChannel;

    /**
     * The way the person can be contacted within the channel.
     */
    value: string;

    /**
     * The URL of the person in the channel, if available.
     */
    url?: URL;

};
