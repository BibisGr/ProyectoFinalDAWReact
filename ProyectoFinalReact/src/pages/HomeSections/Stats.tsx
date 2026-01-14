import {stats} from "../../data/features.ts";
import StatItem from "../../components/StatItem.tsx";

export default function Stats() {
    return (
        <section>
            {stats.map((stat, index) => (
                <StatItem key={index} {...stat} />
            ))}
        </section>
    );
}