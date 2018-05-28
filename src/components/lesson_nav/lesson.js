import React, { Component } from "react";

class Lesson extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav__lesson">
                <div className="nav__lesson--status"></div>
                <a className="nav__lesson--title">{this.props.lesson}</a>
            </div>
        )
    }

}

export default Lesson;
