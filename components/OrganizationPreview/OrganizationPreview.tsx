import type Organization from "@/types/Organization";
import classNames from "@/components/OrganizationPreview/OrganizationPreview.module.scss";

interface Props {
    organization: Organization;
};

export default function OrganizationPreview({ organization }: Props) {
    return organization.url !== undefined ? <a className={classNames.root} href={organization.url.href}>{organization.name}</a> : <span className={classNames.root}>{organization.name}</span>;
}
