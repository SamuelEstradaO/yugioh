import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const LogIn = ({ setView }) => {

    return (
        <div className="col-6 g-0 p-4" style={{ color: "black" }}>
            <button type="button" className="btn-close position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
            <img src="/logoblack.png" alt="mercado tcg" className="img-fluid mx-auto d-block" />
            <p className="text-center">¡BIENVENIDO! INICIA SESIÓN</p>
            <div className="form-floating mb-3">
                <input type="email" id="mail" className="w-100 form-control rounded-pill" placeholder="name@example.com" />
                <label htmlFor="mail">Correo electrónico</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" id="password" className="w-100 form-control rounded-pill" placeholder="pass1234" />
                <label htmlFor="password">Contraseña</label>
            </div>
            <div className="col-12 d-flex justify-content-end mb-3">
                <button type="button" className="btn btn-danger rounded-pill"><FontAwesomeIcon icon={faUser} /> Iniciar sesión</button>
            </div>
            <div className="col-12 text-end">
                <Link>¿Olvidaste tu contraseña?</Link>
                <br />
                <Link onClick={setView}>¿No tienes cuenta? Registrate!</Link>
            </div>
        </div>
    )
};
export default LogIn;