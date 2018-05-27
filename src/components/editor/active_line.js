import React, { Component } from 'react';
import hotkeys from 'hotkeys-js';

class HotKeysDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: 'Trying this first',
        };
        hotkeys('cmd+shift+d', (e, handle) => this.onCopySC(e, handle))
    }
    onCopySC(e, handle) {
        e.preventDefault();
        this.setState({output: 'cmd was pressed'});
        console.log(handle);
    }

    render() {
        return (
            <div>
                <div > {this.state.output} </div>
            </div>
        )
    }
}

// hotkeys('cmd', () => console.log('hello'));

export default HotKeysDemo;
