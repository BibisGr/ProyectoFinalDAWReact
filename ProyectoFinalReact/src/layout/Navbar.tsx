export default function Navbar() {
     return (
        <nav  aria-label="main navigation">
            <div className="container-fluid d-flex justify-content-between align-items-center mb-3">
                <a className="navbar-brand" href="#">
                    LOGO
                </a>
                <div className="">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-4">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Cartelera</li>
                        <li className="nav-item">Tickets</li>
                        <li className="nav-item">Contacto</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}