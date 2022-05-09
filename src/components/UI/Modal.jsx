import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div  onClick={props.onClick} className={classes.backdrop}/>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClick, src }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClick}/>,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>
          {children}
          <a target="_blank" className="text-gray-500 font-semibold text-sm" href={src}>Otwórz oryginał</a>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;