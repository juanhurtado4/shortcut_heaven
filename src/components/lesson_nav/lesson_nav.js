import React, { Component } from "react";
import gameLessons from "../main_game/game_lessons";

const Lesson = ( { lesson } ) => (
    <div className="lessons_nav__lesson">
        <div className="lessons_nav__lesson__status"></div>
        <a className="lessons_nav__lesson__title">{lesson}</a>
    </div>
);

const LessonList = ( { lessons } ) => (
    <aside className="lessons_nav">
        <h1 className="lessons_nav__title">Atom Shortcuts</h1>
        <ol>
            {lessons}
        </ol>
    </aside>
);

const LessonNavContainer = () => {
    const lessonComponents = Object.values(gameLessons).map((lesson, index) => {
        return <Lesson lesson={lesson.name} key={index}/>
    });
    return <LessonList lessons={lessonComponents}/>
};

export default LessonNavContainer;
