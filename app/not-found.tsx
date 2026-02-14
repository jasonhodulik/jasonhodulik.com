import type { Metadata } from "next";
import NotFoundError from "@/components/NotFoundError/NotFoundError";

export const metadata: Metadata = {
    title: "404 Not Found",
    robots: {
        index: false
    }
};

export default function NotFound() {
    return <NotFoundError />;
}
