import React, { Component } from 'react';
import HotKeysDemo from './components/interface/active_line';
// import hotkeys from 'hotkeys-js';

import Game from "./components/game/game";

/**
 * Container component for the entire game
 */
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
