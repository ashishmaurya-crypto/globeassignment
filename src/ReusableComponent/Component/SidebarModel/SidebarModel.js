import React, { useState, useEffect } from "react";
import './SidebarModel.css';
import { ImCross } from 'react-icons/im'


function SidebarModel(props) {
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
            <div className={`Modal2 ${displayModal ? "Show" : ""}`}>
                <div className="d-flex flex-column align-items-center">
                    {props.children}
                </div>
                <div className="close-button" onClick={() => closeHandler()}>
                    <ImCross fill="white" />
                </div>
            </div>


            <div
                className={`Overlay2 ${displayModal ? "Show" : ""}`}
                onClick={() => closeHandler()}
            />
        </div>
    );
}

export default SidebarModel;
