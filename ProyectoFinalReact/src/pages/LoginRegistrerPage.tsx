import {useState} from "react";
import {Login, Registrer} from "../components/LoginRegistrer.tsx";

export default function LoginRegistrerPage(){
    const  [isLogin, setIsLogin] = useState(true)
    const toogleForm =  () =>setIsLogin(!isLogin)
    return (
        <section>
            {isLogin ? <Login/> : <Registrer/>}

        <button onClick={toogleForm}>
            {isLogin ? "Registrarse" : "Iniciar Sesion"}
        </button>
        </section>
    )
}
