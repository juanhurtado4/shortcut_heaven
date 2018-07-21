import React, { Component } from "react";
import Lesson from "./lesson";

/**
 * Container component for the ordered list in the lesson navigation
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
        const lessonComponents = Object.values(this.props.lessons).map((lesson, index) => {
            return <Lesson lesson={lesson.name} key={index}/>
        });

        return (
            <ol>
                {lessonComponents}
            </ol>
        )
    }
}

export default LessonList;
