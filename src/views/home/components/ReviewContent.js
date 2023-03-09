const ReviewContent = ({ reviewData, index }) => {
    return (
        <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="d-flex flex-wrap">
                <div className="col-12 col-md-6 m-auto">
                    <p><img src={`/${reviewData["user-pic"]}`} alt="profile pic" className="rounded-circle d-block d-sm-inline mx-auto" style={{ width: "100px" }} /> {reviewData.user}</p>
                </div>
                <div className="col-12 col-md-6 px-5">
                    {`"${reviewData.comment}"`}
                </div>
            </div>
        </div>
    )
};

export default ReviewContent;