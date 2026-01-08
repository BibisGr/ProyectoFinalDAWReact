import {cartelera} from "../../data/cartelera.ts";
import PeliculaCard from "../../components/PeliculaCard.tsx";

export default function Cartelera() {
    return (
        <section className="d-flex flex-wrap justify-content-center gap-4 my-4">
            {
                cartelera.map(cartelera => (
                    <PeliculaCard title={cartelera.title}
                                  price={cartelera.price}
                                  image={cartelera.image}
                                  key={cartelera.id}
                    />
                ))
            }
        </section>

    )
}