import { getBlogs } from "@@/lib/blog/getBlogs";

export default async function Blogs() {
    const blogs = await getBlogs();

    return (
        <ul>
            {blogs.map(({ frontmatter }, index) => (
                <li key={index}>{frontmatter.title}</li>
            ))}
        </ul>
    );
}
