import React, { Component } from "react";
import Lesson from "./lesson";

/**
 * Container component for the ordered list of lesson navigation
 */
class LessonList extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Creates ordered list of lessons for the current interface
     * @return {HTMLElement}
     */
    render() {
        const lessonComponents = Object.entries(this.props.lessons).map((shortcut, index) => {
            return <Lesson lesson={shortcut[1]} key={index}/>
        });

        return (
            <ol>
                {lessonComponents}
            </ol>
        )
    }
}

export default LessonList;
