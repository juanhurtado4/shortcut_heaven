import React, { Component } from "react";

class LessonTips extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="tips">
                <h1 className="tips__title">{this.props.interface} Shortcut Lesson</h1>
            </aside>
        )
    }

}

export default LessonTips;