import type { MetadataRoute } from "next";
import { base } from "@/data/urls";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: base.href,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        }
    ]
}
