import { useState } from "react";

import LogIn from "./LogIn";
import RestorePassword from "./RestorePassword";

const LogInModal = () => {
    const [login, setLogin] = useState(true)
    const setView = () => {
        setLogin(!login);
    }
    return (
        <div className="modal fade" id="logInModal" tabIndex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6 g-0 rounded-start" style={{ backgroundColor: "rgba(225, 29, 53,1)" }}>
                                    <img src="/yamiyugi.png" alt="" className="img-fluid rounded-start" />
                                </div>
                                {login && <LogIn setView={setView} />}
                                {!login && <RestorePassword setView={setView} />}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default LogInModal;