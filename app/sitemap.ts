import type { MetadataRoute } from "next";
import { base } from "@/data/urls";

export const dynamic = "force-static"; // Required to allow sitemap.xml generation during static builds.

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
