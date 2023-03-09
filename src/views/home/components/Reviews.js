import styled from "styled-components";

import { DivWithImage } from "../../../theme";
import ReviewContent from "./ReviewContent";
import { reviewsData } from "../../../data/Data";

const Li = styled.li`
    width: 0.6rem!important;
    height: 0.6rem!important;
    border-radius: 50%;
    cursor: pointer;
`

const Reviews = () => {
    return (
        <div className="container my-5 px-5">
            <DivWithImage bgImage="bg-crosspromo.jpg" className="row py-4 align-content-center text-center">
                <p className="col-lg-12 col-sm-12 mx-auto pb-4 h4">Los usuarios en <img src="/logo.png" alt="logo" style={{ width: "180px" }} /></p>

                <div id="reviews" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner row pb-5">
                        {reviewsData.map((review, i) => <ReviewContent key={i} reviewData={review} index={i} />)}
                    </div>
                    <ol className="carousel-indicators" style={{ bottom: "auto" }}>
                        {reviewsData.map((review, i) => <Li type="button" data-bs-target="#reviews" data-bs-slide-to={i} className={`${i === 0 ? "active" : ""}`} aria-current={i === 0 ? "true" : ""} aria-label={`Slide ${i + 1}`} key={i}></Li>)}
                    </ol>
                    <button className="carousel-control-prev" style={{ width: "fit-content" }} type="button" data-bs-target="#reviews" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" style={{ width: "fit-content" }} type="button" data-bs-target="#reviews" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                </div>
            </DivWithImage>
        </div>
    )
};

export default Reviews;