import React, { Component } from "react";

class Lesson extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="lessons_nav__lesson">
                <div className="lessons_nav__lesson__status"></div>
                <a className="lessons_nav__lesson__title">{this.props.lesson}</a>
            </div>
        )
    }

}

export default Lesson;
