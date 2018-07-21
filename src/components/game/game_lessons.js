import React from 'react';

const duplicateCode = (
        <pre><code>
            <span className="js-key">const</span> <span className="js-var">duplicateMe</span>
            <span className="js-symbol"> = </span>
            <span className="js-str">"You ain't got the answers Sway!"</span>
            <span className="js-var">;</span>
        </code></pre>
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
        snakeCase: 'duplicate_line',
        status: false,
        code: duplicateCode,
        tip: 'Duplicate tip'
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
