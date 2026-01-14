export function Login() {
    return (
        <div>
            {/*<h2>Login</h2>*/}
            {/*<form>*/}
            {/*    <input type="email" placeholder="Email" />*/}
            {/*    <input type="password" placeholder="Password" />*/}
            {/*    <button type="submit">Login</button>*/}
            {/*</form>*/}
            <form>
                <h1 className="h3 mb-3 fw-normal">Sign in</h1>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com"/> <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault"/>
                    <label className="form-check-label" htmlFor="checkDefault">
                        Remember me
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>
            <p className="pt-5">¿No tienes cuenta? </p>
        </div>
    )
}

// Register.jsx
export function Register() {
    return (
        <div>
            {/*<h2>Register</h2>*/}
            {/*<form>*/}
            {/*    <input type="text" placeholder="Name" />*/}
            {/*    <input type="email" placeholder="Email" />*/}
            {/*    <input type="password" placeholder="Password" />*/}
            {/*    <button type="submit">Register</button>*/}
            {/*</form>*/}
            <form>
                <h1 className="h3 mb-3 fw-normal">Sign up</h1>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="Jhon"/> <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="Jhon"/> <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com"/> <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="passwordConfirm" className="form-control" id="floatingPassword" placeholder="Confirm Password"/>
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>
                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault"/>
                    <label className="form-check-label" htmlFor="checkDefault">
                        Acepto Términos y Condiciones, Políticas de Privacidad y el Uso de Cookies.
                    </label>
                </div>
                <button className="btn btn-success w-100 py-2" type="submit">Sign Up</button>
            </form>
            <p className="pt-5">¿Ya tienes cuenta? </p>
        </div>
    )
}