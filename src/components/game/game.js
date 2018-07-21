import React, { Component } from "react";

// import LessonTips from "../lesson_tips/lesson_tips";
import LessonNavigation from "../lesson_nav/lesson_nav";
import game_lessons from "./game_lessons";
import EditorTemplate from "../interface/templates/editor";

/**
 * Container component for the game
 */
class Game extends Component {


    /**
     * Initiate the starting interface and lesson for the game
     */
    constructor(props) {
        super(props);
        this.state = {
            activeLesson: game_lessons['duplicateLine'],
        }

    }

    /**
     * Changes the current lesson to one selected by the user
     * @param {number} lessonNum - Lesson chosen by the user
     */
    onLesson = (lesson) => (
        this.setState({
            lesson: lesson,
        })
    );

    /**
     * Creates the three main components of the game
     * @return {HTMLElement}
     */
    render() {
        return (
            <div className="game">
                <LessonNavigation
                    lessons={game_lessons}
                    activeLesson={this.state.activeLesson}
                />
                <EditorTemplate
                    name={this.state.activeLesson.snakeCase}
                    code={this.state.activeLesson.code}
                />
                <div className="temp"></div>
                {/*<LessonTips interface={this.state.interface.atom}/>*/}
            </div>
        )
    }


}

export default Game;
