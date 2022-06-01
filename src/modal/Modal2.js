import React from "react";
import ReactDOM from "react-dom";
import "./styles/Modal2.css";

function Modal2({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal2 };