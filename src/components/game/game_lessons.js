import React, { Fragment } from 'react';

const txtContainer = (num, code) => (
    <span className="editor__ln">
        {num}
        <span className="editor__ln--active">{ code }</span>
    </span>
);

const duplicateTxt = txtContainer(1,
        <pre><code>
            <span className="js-key">const</span> <span className="js-var">duplicateMe</span>
            <span className="js-symbol"> = </span>
            <span className="js-str">"You ain't got the answers Sway!"</span>
            <span className="js-var">;</span>
        </code></pre>
);

const solvedDuplicateTxt = (
    <Fragment>
        { txtContainer(1) }
        { txtContainer(2) }
    </Fragment>
);
const moveLine = (
        <pre><code>
            <span className="js-key">const</span> <span className="js-var">move</span>
            <span className="js-symbol"> = </span>
            <span className="js-str">"Move or you will be moved"</span>
            <span className="js-var">;</span>
        </code></pre>
);
const cutLine = (
        <pre><code>
            <span className="js-key">const</span> <span className="js-var">cutLine</span>
            <span className="js-symbol"> = </span>
            <span className="js-str">"I got no strings on me.."</span>
            <span className="js-var">;</span>
        </code></pre>
);
const deleteHalf = (
        <pre><code>
            <span className="js-key">const</span> <span className="js-var">deleteHalf</span>
            <span className="js-symbol"> = </span>
            <span className="js-str">"...half of the population with a snap"</span>
            <span className="js-var">;</span>
        </code></pre>
);

const game_lessons = {
    'duplicateLine': {
        name: 'Duplicate Line',
        id: 'duplicate_line',
        status: false,
        code: duplicateTxt,
        solvedCode: solvedDuplicateTxt,
        tip: 'Duplicate tip',
        lines: {default: 2, solved: 3},
        next: 'moveLine'
    },
    'moveLine': {
        name: 'Move Line',
        status: false,
        code: moveLine,
        tip: 'Move tip'
    },
    'cutLine': {
        name: 'Cut Line',
        status: false,
        code: cutLine,
        tip: 'Cut tip'
    },
    'deleteFromOnward': {
        name: 'Move Line',
        status: false,
        code: 'const deleteHalf = "...half of the population with a snap";',
        tip: 'Delete tip'
    },
    'multipleCursors': {
        name: 'Multiple Cursors',
        status: false,
        code: deleteHalf,
        tip: 'Multiple Cursors tip'
    }
};

export default game_lessons;
