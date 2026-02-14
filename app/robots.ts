import type { MetadataRoute } from "next";
import { sitemap } from "@/data/urls";

export const dynamic = "force-static"; // Required to allow robots.txt generation during static builds.

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            disallow: " "
        },
        sitemap: sitemap.href
    };
};
