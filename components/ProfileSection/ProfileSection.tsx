import classNames from "@/components/ProfileSection/ProfileSection.module.scss";

type Props = {
    name: string;
    children?: React.ReactNode;
};

export default function ProfileSection({ name, children }: Props) {
    return (
        <section className={classNames.root}>
            <h2>{name}</h2>
            {children}
        </section>
    );
}
