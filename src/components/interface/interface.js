import React, { Component } from 'react';
import EditorTemplate from "./templates/editor";
// TODO: Add state to interface component. E.g. Atom, Chrome etc

class Interface extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { currentInterface } = this.props;

        return (
            <EditorTemplate
                name={currentInterface.name}
                type={currentInterface.type}
            />

        )

    }

}

export default Interface;
