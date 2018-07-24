import React from "react";

const MainHeader = () => (
    <nav className="header">
        <span className="header__logo">
            <i className="fas fa-crown"></i> <span className="header__logo--txt">ShortcutKing</span>
        </span>
        <div className="game__title--container">
            <h1 className="game__title">Press key combination to solve the puzzle</h1>
        </div>
    </nav>
);

export default MainHeader;
