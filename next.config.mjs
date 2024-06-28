import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX()(nextConfig);
