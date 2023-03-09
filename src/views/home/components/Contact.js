import styled from "styled-components";

import { DivWithImage as ImageDiv } from "../../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faEnvelope, faMobileScreenButton, faUser, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const Form = styled.form`
    color: black;
`
const DivWithImage = styled(ImageDiv)`
    border-radius: 0;
`
const Span = styled.span`
    border-radius: 50% 0 0 50%;
`
const Textarea = styled.textarea`
    border-radius: 0.25rem;
    width: 100%;
`
const Button = styled.button`
    color: inherit;
    text-decoration: none;
    &:hover{
        color: inherit;
        text-decoration: underline;
    }
`

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <DivWithImage className="col-lg-12 col-sm-12 my-5 p-5" bgImage="bkg_slice_v1.jpg">
            <Form className="row" onSubmit={handleSubmit}>
                <label className="form-label col-md-6 col-sm-12" style={{ fontSize: "2rem" }}>Contactanos</label>
                <label className="form-label col-md-6 col-sm-12" style={{ fontSize: "1rem" }}>
                    <span className="pe-4 d-block d-sm-inline-block"><FontAwesomeIcon icon={faMobileScreenButton} />(461)987 6543 </span>
                    <span className="d-block d-sm-inline-block"><FontAwesomeIcon icon={faEnvelope} />hola@mercadotcg.com</span>
                </label>
                <div className="col-md-6 mb-3 mb-md-0">
                    <div className="input-group">
                        <Span className="input-group-text"><FontAwesomeIcon icon={faUserAstronaut} /></Span>
                        <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <Span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></Span>
                        <input type="email" className="form-control" placeholder="e-mail" aria-label="e-mail" />
                    </div>
                </div>
                <div className="col-md-9 mt-3 mt-md-5">
                    <Textarea name="comment" id="comment" placeholder="Escribe un comentario"></Textarea>
                </div>
                <div className="col-md-3 mt-3 mt-md-5">
                    <Button type="submit" className="btn btn-link">
                        CONTACTANOS <FontAwesomeIcon icon={faCaretRight} />
                    </Button>
                </div>
            </Form >
        </DivWithImage >

    )
};

export default Contact;