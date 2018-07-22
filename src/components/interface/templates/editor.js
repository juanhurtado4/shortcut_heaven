import React from 'react';
import MacBezel from "./bezel";
// TODO: Add a

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
        editorLines.push(<span>{i}</span>);
    }

    return (
        <div className="editor">
            {code}
            {editorLines}
        </div>
    );
};

const EditorFooter = () => <footer className="footer"></footer>;

const EditorTemplate = ( { lesson, code, lines } ) => (
        <div className="interface">
            <MacBezel
                name={lesson}
            />
            <EditorHeader/>
            <EditorBody
                code={code}
                lines={lines}
            />
            <EditorFooter/>
        </div>
);

export default EditorTemplate;
