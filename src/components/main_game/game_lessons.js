import React, { Fragment } from 'react';
import onDuplicateAnswer from "../state/events/keyboard_events";
import ActiveLine from "../interface/active_line";
import hotkeys from 'hotkeys-js';

const duplicateTxt = () => (
    <ActiveLine
        jsStr={`'You ain't got the answers Sway!'`}
        jsVar={'duplicateMe'}
        num={1}
    />
);

const solvedDuplicateTxt = () => (
    <Fragment>
        <ActiveLine
            jsStr={`'You ain't got the answers Sway!'`}
            jsVar={'duplicateMe'}
            num={1}
        />
        <ActiveLine
            jsStr={`'You ain't got the answers Sway!'`}
            jsVar={'duplicateMe'}
            num={2}
        />
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

const gameLessons = {
    'duplicateLine': {
        name: 'Duplicate Line',
        id: 'duplicateLine',
        status: false,
        code: duplicateTxt,
        solvedCode: solvedDuplicateTxt,
        tip: 'Duplicate tip',
        lines: {default: 2, solved: 3},
        next: 'moveLine',
        bindShortcut() { hotkeys('cmd+shift+d', onDuplicateAnswer) },
        unBindShortcut() { hotkeys.unbind('cmd+shift+d') },

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

export default gameLessons;
