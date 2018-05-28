import React, { Component } from "react";
import LessonList from "./lesson_list";

class LessonNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="lesson_nav">
                <h1 className="lesson_nav__title">{this.props.currentInterface.name} Shortcut Lessons</h1>
                <LessonList lessons={this.props.currentInterface.shortcuts}/>
            </aside>
        )
    }
}

export default LessonNavigation;