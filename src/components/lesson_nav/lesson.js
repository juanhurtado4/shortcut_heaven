import React from "react";

/**
 * Creates a single lesson component for navigation
 * @return {HTMLElement}
 */
const Lesson = ( { lesson } ) => (
    <div className="lessons_nav__lesson">
        <div className="lessons_nav__lesson__status"></div>
        <a className="lessons_nav__lesson__title">{lesson}</a>
    </div>
)


export default Lesson;
