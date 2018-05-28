import React, { Component } from "react";
// import LessonTips from "../lesson_tips/lesson_tips";
import LessonNavigation from "../lesson_nav/lesson_nav";
import interfaceProps from "../interface/interface_props";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: 1,
            currentInterface: interfaceProps.atom,
        }

    }

    onLesson(lessonNum) {
        this.setState({
            lesson: lessonNum,
        })
    }

    onChangeInterface(interfaceName) {
        this.setState({
            currentInterface: interfaceName
        })
    }

    render() {
        return (
            <div className="game">
                <LessonNavigation currentInterface={this.state.currentInterface}/>
                {/*<LessonTips interface={this.state.interface.atom}/>*/}
                {/*<Editor/>*/}
            </div>
        )
    }


}

export default Game;
