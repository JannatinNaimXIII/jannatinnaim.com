import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "selector",
    content: ["./src/**/*.{tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ["var(--font-heading)", "sans-serif"],
                body: ["var(--font-body)", "sans-serif"],
                code: ["var(--font-code)", "monospace"],
            },
        },
    },
    plugins: [],
};
export default config;
