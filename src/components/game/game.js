import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: 1
        }

    }

    onLesson(lessonNum) {
        this.setState({
            lesson: lessonNum,
        })
    }

    render() {
        return (
            <div className="game">
                <LessonTips/>
                <Editor/>
                <LessonNavigation/>
            </div>
        )
    }


}