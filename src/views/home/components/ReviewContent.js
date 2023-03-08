import { reviewData } from "../../../data/Data";

const ReviewContent = () => {
    return (
        <>
            <div className="col-6">
                <p><img src={`/${reviewData["user-pic"]}`} alt="profile pic" className="rounded-circle" style={{ width: "100px" }} /> {reviewData.user}</p>
            </div>
            <div className="col-6 px-5">
                {`"${reviewData.comment}"`}
            </div>
        </>
    )
};

export default ReviewContent;