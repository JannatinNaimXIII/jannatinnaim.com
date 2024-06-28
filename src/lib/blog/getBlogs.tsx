import fs from "fs";
import path from "path";
import { blogsPath } from "./config";
import { compileMDX } from "next-mdx-remote/rsc";

interface BlogFrontMatter {
    title: string;
    subtitle: string;
    datePublished: string;
}

export async function getBlogs() {
    return await Promise.all(
        fs
            .readdirSync(blogsPath, "utf-8")
            .map((file) => fs.readFileSync(path.join(blogsPath, file)).toString())
            .map((content) =>
                compileMDX<BlogFrontMatter>({
                    source: content,
                    options: {
                        parseFrontmatter: true,
                    },
                }),
            ),
    );
}
