import { getBlog } from "@@/lib/blog/getBlog";
import { notFound } from "next/navigation";

export default async function IndividualBlog(props: { params: { slug: string } }) {
    const blog = await getBlog(props.params.slug);

    if (!blog) {
        return notFound();
    }

    return <article className="mx-auto max-w-[60ch] text-lg">{blog.content}</article>;
}
