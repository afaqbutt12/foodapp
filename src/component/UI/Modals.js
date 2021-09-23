import ReactDom  from "react-dom";
// import  ReactDom from "react-dom";
import "./Modal.css"
const BackDrop = (props)=>{
    return(
        <div className="backdrop">

        </div>
    );
};
const ModalOverlay = (props)=>{
    return(
        <div className="modal">
<div className="content"> {props.cartBox}</div>
        </div>
    );
};
const Modal = (props)=>{
    const portalElement = document.getElementById("overLays")
    return(
        <>
        {ReactDom.createPortal(<BackDrop/>,portalElement)}
        {ReactDom.createPortal(<ModalOverlay cartBox={props.children}/>,portalElement)}
        </>
    );
};
export default Modal