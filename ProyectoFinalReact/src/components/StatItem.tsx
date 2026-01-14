type ItemProps = {
    value: string | number;
    label: string;
}
export default function StatItem({ value, label }:ItemProps) {
    return (
        <div>
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    );
}