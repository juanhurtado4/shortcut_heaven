import React, { Component } from "react";

// import LessonTips from "../lesson_tips/lesson_tips";
import LessonNavigation from "../lesson_nav/lesson_nav";
import interfaceProps from "./game_lessons";
import Interface from "../interface/interface";

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
            lesson: 1,
            currentInterface: interfaceProps.atom,
        }

    }

    /**
     * Changes the current lesson to one selected by the user
     * @param {number} lessonNum - Lesson chosen by the user
     */
    onLesson = (lessonNum) => (
        this.setState({
            lesson: lessonNum,
        })
    )

    /**
     * Changes the current interface to one selected by the user
     * @param {string} interfaceName
     */
    onChangeInterface = (interfaceName) => (
        this.setState({
            currentInterface: interfaceName
        })
    )

    /**
     * Creates the three main components of the game
     * @return {HTMLElement}
     */
    render() {
        return (
            <div className="game">
                <LessonNavigation currentInterface={this.state.currentInterface}/>
                <Interface currentInterface={this.state.currentInterface}/>
                <div className="temp"></div>
                {/*<LessonTips interface={this.state.interface.atom}/>*/}
            </div>
        )
    }


}

export default Game;
