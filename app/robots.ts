import type { MetadataRoute } from "next";
import { sitemap } from "@/data/urls";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            disallow: " "
        },
        sitemap: sitemap.href
    };
};
