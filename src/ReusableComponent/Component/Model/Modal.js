import React, { useState, useEffect } from "react";
import "./Modal.css";

function Modal(props) {
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        setDisplayModal(props.show);

    }, [props.show]);

    const closeHandler = (e) => {
        setDisplayModal(!displayModal);
        props.onClose(false);
    };


    return (
        <div>
            <div className={`Modal ${displayModal ? "Show" : ""}`}>
                <div>
                    {props.children}
                </div>
            </div>
            <div
                className={`Overlay ${displayModal ? "Show" : ""}`}
                onClick={() => closeHandler()}
            />
        </div>
    );
}

export default Modal;