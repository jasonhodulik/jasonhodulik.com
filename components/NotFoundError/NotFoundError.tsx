import classNames from "@/components/NotFoundError/NotFoundError.module.scss";
import Link from "next/link"
import { base } from "@/data/urls";

export default function NotFoundError() {
    return (
        <div className={classNames.root}>
            <h1>Not Found</h1>
            <p><Link href={base.href}>Go to Homepage</Link></p>
        </div>
    );
}
