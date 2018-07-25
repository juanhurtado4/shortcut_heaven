import React from 'react';

const OnSuccessModal = () => {
    return (
        <div>
            <i className="fas fa-times"></i>
            <h1 className="modal__title">Title</h1>
            <p className="modal__body">body</p>
            <button className="btn btn--grey">Back</button>
            <button className="btn btn--default">Next</button>
        </div>
    );
};

export default OnSuccessModal;
