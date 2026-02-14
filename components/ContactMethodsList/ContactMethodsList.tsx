import type { ContactMethod } from "@/types/ContactMethod";
import classNames from "@/components/ContactMethodsList/ContactMethodsList.module.scss";
import ContactMethodPreview from "@/components/ContactMethodPreview/ContactMethodPreview";

type Props = {
    contactMethods: ContactMethod[];
};

export default function ContactMethodsList({ contactMethods }: Props) {
    return (
        <ul className={classNames.root}>
            {contactMethods.map((contactMethod, index) => <li key={index}><ContactMethodPreview contactMethod={contactMethod} /></li>)}
        </ul>
    );
}
