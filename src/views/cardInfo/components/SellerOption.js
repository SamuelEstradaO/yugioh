import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

const P = styled.p`
    font-size: 0.9rem;
`
const SellerOption = ({ sellerInfo }) => {
    const rating = [];
    for (let i = 1; i <= 5; i++) {
        sellerInfo.rating >= i ? rating.push(<FontAwesomeIcon icon={faStarSolid} style={{ color: "rgba(249, 205, 63, 1)" }} key={i} />) : rating.push(<FontAwesomeIcon icon={faStar} key={i} />)
    }
    return (
        <div className="card bg-danger-subtle mb-3">
            <div className="row g-0">
                <div className="col-sm-12 col-md-4 p-3">
                    <img src={`/${sellerInfo.cardPic}`} alt="Card Pic" className="img-fluid" />
                </div>
                <div className="col-8 row g-0">
                    <div className="col-12 col-md-7">
                        <div className="card-body px-0">
                            <P className="card-text my-2">Estado: {sellerInfo.status}</P>
                            <P className="card-text mb-2">Vendedor: {sellerInfo.user}</P>
                            <P className="card-text mb-2">Vendidos: {sellerInfo.sold}</P>
                            <P className="card-text mb-2">MXN ${sellerInfo.price}</P>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 px-1 d-flex flex-column justify-content-evenly">
                        {/* <div className="card-body px-0 d-flex flex-column justify-content-evenly"> */}
                        <div className="text-center">
                            {rating.map(rate => rate)}
                        </div>
                        <button className="btn btn-danger rounded-pill ">
                            Comprar
                        </button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SellerOption;