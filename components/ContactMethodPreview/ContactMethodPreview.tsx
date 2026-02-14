import type { ContactMethod } from "@/types/ContactMethod";
import ContactChannel from "@/types/ContactChannel";
import classNames from "@/components/ContactMethodPreview/ContactMethodPreview.module.scss";

type Props = {
    contactMethod: ContactMethod;
};

export default function ContactMethodPreview({ contactMethod }: Props) {
    return contactMethod.url !== undefined ? <a className={classNames.root} href={contactMethod.url.href} data-channel={ContactChannel[contactMethod.channel]}>{contactMethod.value}</a> : <span className={classNames.root} data-channel={ContactChannel[contactMethod.channel]}>{contactMethod.value}</span>;
}
