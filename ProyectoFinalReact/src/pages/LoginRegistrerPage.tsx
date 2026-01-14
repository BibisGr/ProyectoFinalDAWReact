import {useState} from "react";
import {Login} from "../components/LoginRegistrer.tsx";
import {Register} from "../components/LoginRegistrer.tsx";

export default function LoginRegisterPage() {
    const [isLogin, setIsLogin] = useState(true); // true = Login, false = Register

    // Función para cambiar de componente
    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <section style={{maxWidth: "400px", margin: "0 auto", padding: "2rem"}}>
            {isLogin ? <Login/> : <Register/>}

            <button  onClick={toggleForm} className="btn btn-outline-secondary w-100  py-2"  >
                {isLogin ? "Registrarse" : "Login"}
            </button>

        </section>
    );
}