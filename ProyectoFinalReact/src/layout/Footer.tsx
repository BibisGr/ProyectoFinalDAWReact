import { footerLinks } from "../data/links.ts";
import FooterColumn from "../components/FooterColumns.tsx";

export default function Footer() {
    return (
        <div className="bg-dark rounded-bottom-2 m-5 p-4">

        <footer className="container-fluid d-flex justify-content-between  text-white ">
            {footerLinks.map((column, index) => (
                <FooterColumn key={index} {...column} />
            ))}
        </footer>
            <p className="text-white">CopyrightDAW © 2026. Todos los derechos Reservados.</p>
        </div>
    );
}