import "./Card.css"
const Crad = props=>{
    return (
        <div className="card">
        {props.children}
        </div>
    );
};
export default Crad