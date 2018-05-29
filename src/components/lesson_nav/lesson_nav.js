import React, { Component } from "react";
import LessonList from "./lesson_list";

class LessonNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="lessons_nav">
                <h1 className="lessons_nav__title">{this.props.currentInterface.name} Shortcuts</h1>
                <LessonList lessons={this.props.currentInterface.shortcuts}/>
            </aside>
        )
    }
}

export default LessonNavigation;