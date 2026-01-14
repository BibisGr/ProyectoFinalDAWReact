import {testimonials} from "../../data/testimonials.ts";
import TestimonialCard from "../../components/TestimonialCard.tsx";

export default function Testimonials() {
    return (
        <>
            <section className=" container testimonials text-center m-5 p-5 bg-body-tertiary rounded-3 shadow">
                <h2 className="display-3 mb-5">Satisfied Clients Speaks</h2>

                {testimonials.map((item, index) => (
                    <TestimonialCard key={index} {...item} />
                ))}
            </section>
        </>

)
    ;
}