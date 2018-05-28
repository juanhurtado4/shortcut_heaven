import React, { Component } from "react";
import Lesson from "./lesson";

class LessonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lessonComponents = Object.entries(this.props.lessons).map((shortcut, index) => {
            return <Lesson lesson={shortcut[1]} key={index}/>
        });

        return (
            <ul>
                {lessonComponents}
            </ul>
        )
    }
}

export default LessonList;
