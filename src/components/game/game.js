import React, { Component, Fragment } from "react";

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
            lesson: game_lessons.duplicateLine,
            code: game_lessons.duplicateLine.code,
            lines: game_lessons.duplicateLine.lines.default,
            status: game_lessons.duplicateLine.status,
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
            <Fragment>
                <div className="game__main">
                    <nav className="header">
                        <span className="header__logo">
                            <i className="fas fa-crown"></i> <span className="header__logo--txt">ShortcutKing</span>
                        </span>
                        <div className="game__title--container">
                            <h1 className="game__title">Press key combination to solve the puzzle</h1>
                        </div>
                    </nav>
                    <LessonNavigation
                        lessons={game_lessons}
                        activeLesson={this.state.lesson.name}
                    />
                    <EditorTemplate
                        lesson={this.state.lesson.id}
                        code={this.state.code}
                        lines={this.state.lines}
                    />
                    <div className="game__footer">
                        <span className="contact">Get in touch!</span>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="far fa-envelope-open"></i>
                    </div>
                    {/*<LessonTips interface={this.state.interface.atom}/>*/}
                </div>
                <div className="game__tips"></div>
            </Fragment>
        )
    }


}

export default Game;
