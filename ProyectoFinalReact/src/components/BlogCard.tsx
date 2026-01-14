type BlogProps = {
    title: string;
    price: string;
}
export default function BlogCard({ title, price }:BlogProps) {
    return (
        <article>
            <h4>{title}</h4>
            <p>{price}</p>
            <button>Read</button>
        </article>
    );
}