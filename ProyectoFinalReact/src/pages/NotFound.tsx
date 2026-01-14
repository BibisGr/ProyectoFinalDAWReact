export default function NotFound(){
    return (
        <div className="d-flex align-items-center justify-content-center pt-5 pb-5 btn-outline-secondary shadow-lg rounded-2">
            <div className="text-center text-dark-emphasis p-5" >
                <div className="mb-4">
                    <span className="display-1 fw-bold text-warning">404</span>
                </div>
                <h1 className="h3 fw-bold mb-3">Oops! Página no encontrada</h1>
                <p className="text-light-50 mb-4">
                    La página que buscas no existe o ha sido movida.
                    Puedes volver al inicio o explorar otras secciones.
                </p>
                <a href="/" className="btn btn-warning btn-lg rounded-pill px-5 shadow">
                    Volver al inicio
                </a>
                <div className="mt-5">
                    <i className="bi bi-compass" style={{fontSize: "3rem", opacity: "0.2"}}></i>
                </div>
            </div>
        </div>
    )
}