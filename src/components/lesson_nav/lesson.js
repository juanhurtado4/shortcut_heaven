import React, { Component } from "react";

/**
 * Container component for the lesson navigation
 */
class Lesson extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Creates the container for all lessons navigation including current lesson
     * @return {HTMLElement} - Where all of the lesson list live
     */
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
