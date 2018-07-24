import React, { Component, Fragment } from "react";
import store from "../state/store/store";
import gameLessons from "./game_lessons";
import MainHeader from "../header/main_header";
import LessonNavContainer from "../lesson_nav/lesson_nav";
import EditorTemplate from "../interface/templates/editor";
// import LessonTips from "../lesson_tips/lesson_tips";
import MainFooter from "../footer/main_footer";

// TODO: Button to change between lessons will have an event that unbinds previous shortcut and binds current by -
// calling from redux store
// TODO: Add lesson tips component
// TODO: Create update status reducer
// TODO: Add success modal

class MainGame extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate();
        });

        gameLessons.duplicateLine.bindShortcut();

    }

    /**
     * Creates main components of the whole app
     */
    render() {
        return (
            <Fragment>
                <div className="game__main">
                    <MainHeader/>
                    <LessonNavContainer/>
                    <EditorTemplate/>
                    <MainFooter/>
                </div>
                <div className="game__tips"></div>
            </Fragment>

        )
    }

}

export default MainGame;
