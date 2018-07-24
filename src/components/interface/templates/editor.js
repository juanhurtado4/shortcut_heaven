import React from 'react';
import MacBezel from "./bezel";
import store from '../../state/store/store';

const EditorHeader = () => (
        <header>
            <nav>
                <div className="nav">
                    <div className="nav__tab">index.js</div>
                </div>
            </nav>
        </header>
);

const EditorBody  = ( { code, lines } ) => {
    const editorLines = [];
    for (let i = lines; i < 21; i++) {
        editorLines.push(<span key={i}>{i}</span>);
    }

    return (
        <div className="editor">
            {code()}
            {editorLines}
        </div>
    );
};

const EditorFooter = () => <footer className="footer"></footer>;

const EditorTemplate = () => {
    const currState = store.getState();
    return (
        <div className="interface">
            <MacBezel
                name={ currState.lessonName }
            />
            <EditorHeader/>
            <EditorBody
                code={ currState.editor.code }
                lines={ currState.editor.lines }
            />
            <EditorFooter/>
        </div>
    );
};

export default EditorTemplate;
