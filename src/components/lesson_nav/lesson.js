import React, { Component } from "react";

class Lesson extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="lesson_nav__lesson">
                <div className="lesson_nav__lesson__status"></div>
                <a className="lesson_nav__lesson__title">{this.props.lesson}</a>
            </div>
        )
    }

}

export default Lesson;
