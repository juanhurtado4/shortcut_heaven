import React from 'react';

const _getBase = (title='') => (
        <div className="bezel">
            <div className="btn btn--bezel btn--caution"></div>
            <div className="btn btn--bezel btn--secondary"></div>
            <div className="btn btn--bezel btn--primary"></div>
            {title}
        </div>
);

const _getEditorBezel = (editorName) => {
    let editorTitle =  (
            <span className="bezel__title">
                {editorName}_shortcut.js - ~/code/shortcuts
            </span>
    );

    return _getBase(editorTitle);
};

const MacBezel = ({ name }) => (
    <div className="bezel">
        <div className="btn btn--bezel btn--caution"></div>
        <div className="btn btn--bezel btn--secondary"></div>
        <div className="btn btn--bezel btn--primary"></div>
        <span className="bezel__title">
                {name}Shortcut.js - ~/code/shortcuts
        </span>
    </div>

);

export default MacBezel;
