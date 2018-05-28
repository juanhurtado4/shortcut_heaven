import React, { Component } from 'react';
import HotKeysDemo from './components/interface/active_line';
import Game from "./components/game/game";
// import hotkeys from 'hotkeys-js';


class App extends Component {
  render() {
      return (
          <div className="App">
              {/*<HotKeysDemo/>*/}
              <Game/>
          </div>
    );
  }
}

export default App;
