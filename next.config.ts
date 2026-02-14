import type { NextConfig } from "next";
import { base } from "@/data/urls";

const basePath = base.pathname;

const nextConfig: NextConfig = {
    reactCompiler: true,
    basePath: basePath === "/" ? "" : basePath
};

export default nextConfig;
