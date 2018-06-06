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

const MacBezel = ({ name: editorName, type: interfaceType }) => (
    interfaceType === 'editor' ? _getEditorBezel(editorName) : _getBase()

);

export default MacBezel;
