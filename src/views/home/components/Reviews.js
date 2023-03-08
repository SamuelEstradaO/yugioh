import { DivWithImage } from "../../../theme";
import ReviewContent from "./ReviewContent";

const Reviews = () => {

    return (
        <div className="container my-5 px-5">
            <DivWithImage bgImage="bg-crosspromo.jpg" className="row py-4 align-content-center text-center">
                <p className="col-lg-12 col-sm-12 mx-auto pb-4 h4">Los usuarios en <img src="/logo.png" alt="logo" style={{ width: "180px" }} /></p>
                <ReviewContent />
            </DivWithImage>
        </div>
    )
};

export default Reviews;