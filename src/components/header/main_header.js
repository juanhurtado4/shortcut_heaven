import React from "react";
import logo from '../../imgs/logo.png';
// TODO: Change "header__logo" class to header__nav so that it is more semantic (Becareful to account for the styles it that class already has)

const header__logo = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'

}

const gameScore = {
    fontSize: '1.2rem',
    fontWeight: '300',
    marginRight: '2rem',
}

const navLink = {
    fontSize: '1.2rem',
    fontWeight: '300',
    backgroundColor: '#6E7DA0',
    padding: '.2rem 2rem',
    borderRadius: '15px',
}

const MainHeader = () => (
    <nav className="header">
        <span className="header__logo" style={header__logo}>

            <img src={logo} alt="logo" width="120" height="100"/>
            <span>
                <span className="game-score" style={gameScore}>0/12</span>
                <span className="nav-link" style={navLink}>Get in touch!</span>
            </span>
        </span>
        <div className="game__title--container">
            <h1 className="game__title">Press key combination to solve the puzzle</h1>
        </div>
    </nav>
);

export default MainHeader;
