import {features} from "../../data/features.ts";
import FeaturesItem from "../../components/FeaturesItem.tsx";

export default function Features() {
    return (
        <section className="mt-4 mb-4 p-4 bg-light">
            <h1 className="text-center mb-4">Características Destacadas</h1>
            <div className="d-flex justify-content-between flex-wrap">
                {
                    features.map(feature => (
                        <FeaturesItem {...feature}/>
                    ))
                }
            </div>
        </section>
    )
}