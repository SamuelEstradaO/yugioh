import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RestorePassword = ({ setView }) => {

    return (
        <div className="col-6 g-0 p-4" style={{ color: "black" }}>
            <button type="button" className="btn-close position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
            <img src="/logoblack.png" alt="mercado tcg" className="img-fluid mx-auto d-block" />
            <b className="text-start"><Link onClick={setView}><FontAwesomeIcon icon={faChevronLeft} /></Link> Restablecer contraseña</b>
            <p className="my-3">
                Introduce la dirección de correo electrónico asociada a tu cuenta y te enviaremos un correo para restablecer tu contraseña.
            </p>
            <div className="form-floating mb-3">
                <input type="email" id="mail" className="w-100 form-control rounded-pill" placeholder="name@example.com" />
                <label htmlFor="mail">Correo electrónico</label>
            </div>
            <div className="col-12 d-flex justify-content-end mb-3">
                <button type="button" className="btn btn-danger rounded-pill">Restablecer Contraseña</button>
            </div>
            <div className="col-12 text-right">

            </div>
        </div>
    )
};
export default RestorePassword;