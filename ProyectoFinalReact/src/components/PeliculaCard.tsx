import {useNavigate} from "react-router-dom";

type MovieProps ={
    id:string;
    title: string;
    year: number
    poster: string;
    director: string;
}
export function PeliculaCard({title, year, poster, director}: MovieProps) {
    return (
        <article className="card p-3 cardPeli" style={{width: "20rem"}}>
            <h3 className="card-title">{title}</h3>
            <img  className="rounded-4" src={poster} alt={title} />
            <p className="text-success">Year: {year}</p>
            <p className="text-success">Director: {director}</p>
            <button className="buttonBuy">Ver Detalles</button>
        </article>
    )
}
export function PeliculaCardAPI({id,title, year, poster, director}: MovieProps) {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/movie/" + id);
    }
    return (
        <article className="card p-3 cardPeli" style={{width: "20rem"}}>
            <h3 className="card-title">{title}</h3>
            <img  className="rounded-4" src={poster} alt={title} />
            <p className="text-success">Year: {year}</p>
            <p className="text-success">Director: {director}</p>
            <button onClick={handleClick} className="buttonBuy">Ver Detalles</button>
        </article>
    )
}