import React, { Fragment, useRef } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
	return <div onClick={props.onClick} className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
	return (
		<div className={`${classes.modal} max-w-3xl max-h-3xl`}>
			<div className="ml-[50%] mt-[50%] -translate-x-1/2 -translate-y-1/2">
				{children}
			</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onClick, src }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}

			{ReactDOM.createPortal(
				<ModalOverlay>
					{children}
					<a target="_blank" className="text-gray-500 font-semibold text-sm" href={src}>
						Otwórz oryginał
					</a>
				</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;
