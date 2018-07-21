import React, { Component } from "react";
import LessonList from "./lesson_list";

/**
 * Container component for the lesson navigation
 * */

class LessonNavigation extends Component {
    constructor(props) {
        super(props);
    }

    /** Creates the container for all lessons navigation including current lesson
     * @return {HTMLElement} - Where all of the lesson list live
     */
    render() {
            return (
                <aside className="lessons_nav">
                    <h1 className="lessons_nav__title">Atom Shortcuts</h1>
                    <LessonList lessons={this.props.lessons}/>
                </aside>
            )
        }
}

export default LessonNavigation;
