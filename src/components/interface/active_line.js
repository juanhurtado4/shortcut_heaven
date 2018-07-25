import React, { Fragment } from 'react';

const ActiveLine = ( { jsVar, jsStr, num } ) => (
    <span className="editor__ln">
        {num}
        <span className="editor__ln--active">
            <pre><code>
                <span className="js-key">const</span> <span className="js-var">{jsVar}</span>
                <span className="js-symbol"> = </span>
                <span className="js-str">{jsStr}</span>
                <span className="js-var">;</span>
            </code></pre>
        </span>
    </span>

);

export default ActiveLine;
