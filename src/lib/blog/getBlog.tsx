import fs from "fs";
import path from "path";
import { blogsPath } from "./config";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getBlog(slug: string) {
    const blogs = fs.readdirSync(blogsPath, "utf-8").filter((file) => file.endsWith("mdx"));
    const file = blogs.find((filename) => filename === slug + ".mdx");

    if (!file) return null;

    return compileMDX({
        source: fs.readFileSync(path.join(blogsPath, file)).toString(),
        options: {
            parseFrontmatter: true,
        },
        components: {
            h1: ({ children }) => <h1 className="font-heading text-6xl">{children}</h1>,
            p: ({ children }) => <p className="my-4 font-body text-lg">{children}</p>,
            ul: ({ children }) => <ul className="my-4 list-inside list-disc font-body text-lg">{children}</ul>,
            code: ({ children }) => <code className="font-code">{children}</code>,
        },
    });
}
