import React, { Fragment } from 'react';
import store from '../state/store/store'

const hide = {
    position: 'absolute',
    top: '37.5%',
    left: '37.5%',
    transform: 'translateX(-37.5%)',
    visibility: 'hidden',
    backgroundColor: 'white',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3px',
};

const show = {
    ...hide,
    visibility: 'visible',
};

const overlay = {
    backgroundColor: '#1F1F1F',
    opacity: .66,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
};

const hideOverlay = {
    ...overlay,
    visibility: 'hidden',
};

const faTimes = {
    alignSelf: 'flex-end',
    padding: '1rem',
};

const modalTitle = {
    padding: '0 2rem',
};

const modalBody = {
    padding: '0 2rem',
};

const modalFooter = {
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'lightgrey',
};



// TODO: Add light grey background to buttons parent div
const OnSuccessModal = () => {
    const currState = store.getState();
    return (
        <Fragment>
            <div className="overlay" style={currState.modal.status ? overlay : hideOverlay}></div>
            <div className="modal" style={currState.modal.status ? show : hide}>
                <i className="fas fa-times" style={faTimes}></i>
                <h1 className="modal__title ms-b" style={modalTitle}>{currState.modal.title}</h1>
                <p className="modal__body m-b" style={modalBody}>{currState.modal.body}</p>
                <div className="modal__footer" style={modalFooter}>
                    <button className="btn btn--grey ms-r">Back</button>
                    <button className="btn btn--default">Next</button>
                </div>
            </div>
        </Fragment>
    );
};

export default OnSuccessModal;
