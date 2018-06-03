import React from 'react';

function _getBase(title='') {
    return (
        <div className="bezel">
            <div className="btn btn--bezel btn--caution"></div>
            <div className="btn btn--bezel btn--secondary"></div>
            <div className="btn btn--bezel btn--primary"></div>
            {title}
        </div>
    )

}

function _getEditorBezel(editorName) {
    let editorTitle =  (
            <span className="bezel__title">
                {editorName}_shortcut.js - ~/code/shortcuts
            </span>
    )

    return _getBase(editorTitle);
}

function MacBezel(props) {
    let editorName = props.interface.name;
    return props.interface.type === 'editor' ? _getEditorBezel(editorName) : _getBase();


}

export default MacBezel;
