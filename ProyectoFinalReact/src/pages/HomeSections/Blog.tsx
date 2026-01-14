import {blogPosts} from "../../data/testimonials.ts";
import BlogCard from "../../components/BlogCard.tsx";

export default function Blog() {
    return (
        <section>
            <h2>Blog Section</h2>

            {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
            ))}
        </section>
    );
}