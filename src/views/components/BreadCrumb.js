import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {

    const location = useLocation();
    const pathName = location.pathname.split("/");
    return (
        <nav className="col-lg-12 col-sm-12 ps-4 py-4" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
                {pathName.map((path, i, arr) => i <= 0 ? <li className={`breadcrumb-item`} key={i}><Link to={`/`}>Home</Link></li> : i < arr.length - 1 ? <li className={`breadcrumb-item`} key={i}><Link to={`/${path}`}>{path}</Link></li> : <li className="breadcrumb-item active" aria-current="page" key={i}>{path}</li>)}
            </ol>
        </nav>
    )
};
export default BreadCrumb;