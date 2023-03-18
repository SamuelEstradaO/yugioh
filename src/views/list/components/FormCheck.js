const FormCheck = ({ CheckValue = "", mobile = false }) => {

    return (
        <div className="form-check">
            {CheckValue === "Todos" ? <input type="checkbox" className="form-check-input" value="" id={`flexCheck${mobile ? CheckValue + "M" : CheckValue}`} defaultChecked /> : <input type="checkbox" className="form-check-input" value="" id={`flexCheck${mobile ? CheckValue + "M" : CheckValue}`} />}
            <label className="form-check-label" htmlFor={`flexCheck${mobile ? CheckValue + "M" : CheckValue}`}>{CheckValue}</label>
        </div>
    )
};
export default FormCheck;