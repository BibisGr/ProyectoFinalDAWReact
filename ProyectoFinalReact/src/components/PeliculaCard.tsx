type MovieProps ={
    title: string;
    price: number;
    image: string;
}
export default function PeliculaCard({title, price, image}: MovieProps) {
    return (
        <article className="card p-2 cardPeli" style={{width: "15rem"}}>
            <h3 className="card-title">{title}</h3>
            <img  className="rounded-4" src={image} alt={title} />
            <p className="text-success">Price: ${price.toFixed(2)}</p>
            <button className="buttonBuy">Comprar Tickets</button>
        </article>
    )
}