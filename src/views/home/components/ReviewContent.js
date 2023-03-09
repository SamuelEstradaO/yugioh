const ReviewContent = ({ reviewData, index }) => {
    return (
        <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="d-flex">
                <div className="col-6">
                    <p><img src={`/${reviewData["user-pic"]}`} alt="profile pic" className="rounded-circle" style={{ width: "100px" }} /> {reviewData.user}</p>
                </div>
                <div className="col-6 px-5">
                    {`"${reviewData.comment}"`}
                </div>
            </div>
        </div>
    )
};

export default ReviewContent;