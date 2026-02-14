import type { NextConfig } from "next";
import { base } from "@/data/urls";

const basePath = base.pathname;

const nextConfig: NextConfig = {
    reactCompiler: true,
    output: "export",
    basePath: basePath === "/" ? "" : basePath,
    images: { unoptimized: true } // Required for static builds.
};

export default nextConfig;
